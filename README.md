# Welcome to My App - Telegram User Registration Platform

**Frontend:** `my-next-app` (Next.js)  
**Backend:** `my-nest-testing` (NestJS + PostgreSQL)  
**Database:** PostgreSQL (`test_db`) with table `tg_users`

---

## 📋 Overview

This project is a platform that enables user registration via Telegram and allows for viewing registered users. The backend is built using **NestJS** with a PostgreSQL database, and the frontend is developed using **Next.js**. The platform lets users register, view profiles (but not edit them), making it a secure and streamlined experience for managing Telegram-based registrations.

---

## 🚀 Project Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/your-repo/my-project.git
```

---

# Once cloned, navigate into the two directories:

Frontend: my-next-app

Backend: my-nest-testing

---

### Step 2: Backend Setup (NestJS)

1. Navigate to the backend directory:

   ```bash
   cd my-nest-testing
   npm install
   ```

2. Create a .env file for your environment variables:

```bash
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=test_db
```

3. Ensure your PostgreSQL instance is running and create the database and table:

```bash
CREATE DATABASE test_db;
\c test_db;
CREATE TABLE tg_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    telegram_id BIGINT UNIQUE NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    profile_picture TEXT
);
```

4. Start the backend server:

```bash
npm run start:dev
```

5. The backend server should now be running on http://localhost:8080.
