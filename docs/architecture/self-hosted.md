# ��️ **SELF-HOSTED АРХИТЕКТУРА: ДЕТАЛЬНАЯ РАЗРАБОТКА**

## �� **Архитектурная схема:**

```mermaid
graph TB
    subgraph "Инфраструктура"
        A[VPS Provider<br/>Yandex Cloud / Selectel / Timeweb]
        B[Domain & DNS<br/>Reg.ru / Yandex.Connect]
    end
    
    subgraph "Frontend Layer"
        C[Docusaurus Static Site]
        D[Nginx Web Server]
        E[SSL Certificate<br/>Let's Encrypt]
    end
    
    subgraph "Backend Layer"
        F[Node.js API Server]
        G[PostgreSQL Database]
        H[Redis Cache<br/>Optional]
    end
    
    subgraph "Storage Layer"
        I[Local File Storage]
        J[Database Backups]
        K[Log Files]
    end
    
    subgraph "CI/CD Pipeline"
        L[GitHub Repository]
        M[GitHub Actions]
        N[Auto-deploy Scripts]
    end
    
    A --> D
    A --> F
    A --> G
    B --> E
    C --> D
    D --> E
    F --> G
    F --> H
    F --> I
    M --> N
    N --> A
```

## 🎯 **ТЕХНИЧЕСКИЕ СПЕЦИФИКАЦИИ:**

### **VPS требования:**
- **CPU:** 2 vCPU (минимум)
- **RAM:** 4 GB (минимум)
- **Storage:** 50 GB SSD
- **OS:** Ubuntu 22.04 LTS
- **Network:** 1 Gbps, статический IP

### **Программное обеспечение:**
- **Web Server:** Nginx 1.18+
- **Database:** PostgreSQL 15+
- **Runtime:** Node.js 18+ LTS
- **Process Manager:** PM2
- **Containerization:** Docker (опционально)
- **SSL:** Let's Encrypt (Certbot)

## 🔧 **ПЛАН РАЗВЕРТЫВАНИЯ:**

### **Этап 1: Подготовка VPS**
```bash