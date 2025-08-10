# 🆕 **ОБНОВЛЕННАЯ АРХИТЕКТУРА: SELF-HOSTED SUPABASE НА YANDEX CLOUD VPS**

## **Новая архитектурная схема:**

```mermaid
graph TB
    subgraph "Инфраструктура Yandex Cloud"
        A[VPS Instance<br/>Ubuntu 22.04 LTS]
        B[Domain & DNS<br/>Reg.ru]
        C[Static IP Address]
    end
    
    subgraph "Frontend Layer"
        D[Docusaurus Static Site]
        E[Nginx Web Server]
        F[SSL Certificate<br/>Let's Encrypt]
    end
    
    subgraph "Backend Layer (Self-hosted Supabase)"
        G[Supabase Core Services]
        H[PostgreSQL Database]
        I[PostgREST API]
        J[GoTrue Auth]
        K[Realtime Engine]
        L[Storage API]
    end
    
    subgraph "CI/CD Pipeline"
        M[GitHub Repository]
        N[GitHub Actions]
        O[Auto-deploy to VPS]
    end
    
    A --> E
    A --> G
    B --> F
    D --> E
    E --> F
    G --> H
    G --> I
    G --> J
    G --> K
    G --> L
    N --> O
    O --> A
```

## **Преимущества новой архитектуры:**

1. **Полный контроль:** Все данные и сервисы находятся в России
2. **Совместимость:** Supabase API остается стандартным
3. **Масштабируемость:** Возможность вертикального и горизонтального масштабирования
4. **Безопасность:** Данные не покидают российскую юрисдикцию
5. **Стоимость:** Оптимальное соотношение цена/качество

## **Технические требования VPS:**

- **CPU:** 4 vCPU (рекомендуется для Supabase)
- **RAM:** 8 GB (минимум для стабильной работы)
- **Storage:** 100 GB SSD (для базы данных и файлов)
- **Network:** 1 Gbps, статический IP
- **OS:** Ubuntu 22.04 LTS

## **План развертывания Supabase на VPS:**

1. **Подготовка VPS:**
   - Установка Docker и Docker Compose
   - Настройка firewall и безопасности
   - Создание пользователя для Supabase

2. **Развертывание Supabase:**
   - Клонирование официального репозитория
   - Настройка переменных окружения
   - Запуск всех сервисов

3. **Настройка Nginx:**
   - Reverse proxy для Supabase API
   - Статический хостинг для Docusaurus
   - SSL сертификаты

4. **Интеграция с Docusaurus:**
   - Обновление конфигурации
   - Настройка API endpoints
   - Тестирование функциональности

