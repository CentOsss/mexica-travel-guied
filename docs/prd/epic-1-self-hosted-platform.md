# Self-hosted App Platform — Brownfield Enhancement Epic

## Epic Title

Self-hosted App Platform — Brownfield Enhancement

## Epic Goal

Развернуть и подготовить к публикации MVP платформу на VPS: разработка и деплой приложения, настройка домена/SSL/Nginx, self-hosted Supabase, базовый CI/CD, бэкапы и мониторинг.

## Epic Description

### Existing System Context

- Current relevant functionality: статический сайт/контентная платформа на базе Docusaurus (MVP публикации постов)
- Technology stack: Docusaurus, Node.js (build), Nginx, Let's Encrypt, Docker/Compose, Supabase (PostgreSQL, Auth, Edge Functions), GitHub Actions, rsync/SSH
- Integration points:
  - Frontend (Docusaurus) обслуживается Nginx
  - Backend (Supabase self-hosted) развёрнут в Docker на том же VPS
  - DNS/домен у регистратора (например, Reg.ru), A/AAAA запись на VPS
  - CI/CD: GitHub Actions → SSH/rsync на VPS

### Enhancement Details

- What's being added/changed:
  - Развёртывание архитектуры на VPS (Yandex Cloud/эквивалент): ОС, firewall, SSH-hardening
  - Настройка домена и SSL (Let's Encrypt) через Nginx
  - Деплой фронтенда (Docusaurus) как статического сайта за Nginx
  - Развёртывание Supabase (PostgreSQL/Auth/Edge) в Docker/Compose
  - Настройка базового CI/CD, бэкапов БД и мониторинга хоста/сервисов
- How it integrates:
  - Nginx как reverse proxy/статический сервер; роутинг к фронту и, при необходимости, к backend endpoints
  - Supabase доступен внутренне с фронта, ограничения по CORS/Origin
  - GitHub Actions доставляет сборку фронта и конфиги на VPS по SSH/rsync
- Success criteria (measurable):
  - Домен открывается по HTTPS (A/AAAA записи, корректный сертификат)
  - Публикация хотя бы 1 поста (Markdown → Docusaurus) доступна публично
  - Supabase в статусе healthy; успешное подключение из фронта (ping/простая Auth-flow)
  - Ночные бэкапы БД сохраняются локально и/или в удалённое хранилище; проверено восстановление на тестовой базе
  - CI/CD пайплайн по пушу в `main` разворачивает новую версию сайта ≤ 5 минут

## Stories

1. Story 1: VPS, домен, SSL, Nginx (готовность фронта)
   - Brief: подготовить VPS (безопасность, системные пакеты), настроить домен/DNS, выпустить SSL, сконфигурировать Nginx для статического фронтенда
   - Acceptance Criteria:
     - VPS доступен по SSH (ключи, отключен password login, fail2ban/ufw настроены)
     - DNS записи указывают на VPS, сайт открывается по HTTPS с валидным сертификатом
     - Nginx отдает тестовую заглушку/сборку фронта, HTTP→HTTPS редирект работает
     - Описаны шаги деплоя фронта (путь, права, owner)

2. Story 2: Supabase self-hosted (Postgres/Auth/Edge) на VPS
   - Brief: развернуть Supabase через Docker Compose, настроить сети/персистентные volume, базовую безопасность; проверить подключение
   - Acceptance Criteria:
     - Compose-стек запущен (Postgres, Kong/Gotrue/Studio/и т.п.), healthchecks зелёные
     - Данные хранятся на выделенном volume (резервное копирование возможно без простоя)
     - Доступ ограничен firewall’ом; CORS/Origins настроены для домена сайта
     - Фронт успешно подключается к Supabase; базовый Auth-flow (signup/login) проходит

3. Story 3: CI/CD (GitHub Actions→SSH/rsync), бэкапы, мониторинг
   - Brief: настроить пайплайн сборки и доставки фронта; регулярные бэкапы PostgreSQL; базовый мониторинг
   - Acceptance Criteria:
     - GitHub Actions собирает фронт и деплоит на VPS по SSH/rsync, с переменными окружения/секретами
     - Ночные бэкапы БД (pg_dump) с ротацией и проверкой восстановления
     - Мониторинг хоста (load, disk, memory) и сервисов (Nginx, Docker) с алертами (минимум email/Telegram)

## Compatibility Requirements

- Формат контента остаётся Markdown (совместимость с текущими материалами)
- Отсутствие vendor lock-in на зарубежные managed-сервисы (приоритет — self-hosted)
- Обратная совместимость: структура URL и базовые метаданные для SEO не ухудшаются
- Порты сервиса и firewall согласованы, не ломают другие сервисы на VPS

## Risk Mitigation

- Primary Risk: Single point of failure (один VPS), потеря данных, истечение SSL, компрометация доступа
- Mitigation:
  - Регулярные бэкапы и тест восстановления; отдельный volume для данных БД
  - UFW/fail2ban, SSH-ключи, ограничение sudo, обновления безопасности
  - Автообновление сертификатов Let's Encrypt (cron/systemd timers)
  - План возможного scale-out (второй VPS/облачный LB) на будущее
- Rollback Plan:
  - Хранить предыдущую стабильную сборку фронта; быстрый переключатель Nginx site-enabled
  - `docker compose down` и возврат к предыдущему compose-файлу; восстановление БД из последнего бэкапа
  - DNS TTL снижен для быстрого отката записей

## Definition of Done

- Все 3 истории завершены с выполненными AC
- Сайт доступен по домену и HTTPS; опубликован минимум 1 пост
- Supabase стабилен, доступен, интеграция с фронтом проверена
- CI/CD выполняет деплой в пределах SLA; бэкапы и мониторинг включены
- Документация по деплою и операционке обновлена в репозитории

## Validation Checklist

- Scope Validation:
  - [x] Epic можно закрыть в 1–3 сториз
  - [x] Архитектурные изменения локальны и соответствуют ранее утверждённой self-hosted стратегии
  - [x] Интеграции понятны и ограничены
- Risk Assessment:
  - [x] Риски идентифицированы, план отката определён
  - [x] Тест восстановления бэкапа предусмотрен
- Completeness Check:
  - [x] Цель эпика измерима
  - [x] Истории корректно сформулированы с AC
  - [x] Зависимости/секреты учтены (доступ sudo на VPS, домен, DNS, GitHub Secrets)

---

### Mermaid Overview

```mermaid
graph TB
  subgraph VPS["VPS (Yandex Cloud / аналог)"]
    Nginx[Nginx + Let's Encrypt]
    Front[Static Frontend (Docusaurus)]
    Docker[Docker + Compose]
    Supabase[Supabase Stack (Postgres/Auth/Edge)]
  end

  Users((Users)) -->|HTTPS| Nginx
  Nginx --> Front
  Front -->|API| Supabase

  CI[GitHub Actions] -->|SSH/rsync| VPS
  Backup[(Backups)] -.-> Supabase
```
