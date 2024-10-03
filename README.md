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

### Step 3: Frontend Setup (Next.js)
Navigate to the frontend directory:

```bash
cd my-next-app
npm install
```

1. Set up environment variables by creating a .env.local file:

```bash
PUBLIC_URL='http://localhost:3000'
NODE_ENV='production'
HOST=0.0.0.0
PORT=3001
NEXT_PUBLIC_BOT_USERNAME=MagisterUniversBot
NEXT_PUBLIC_BOT_TOKEN=7925198405:AAFQRQOSO_w6vMBgUEQBhtGZ_s86Imen0Lc
```

2. Build and start the frontend server:

```bash
npm run build && npm run start
```

3. The frontend server will now be available at http://127.0.0.1:80.

### Application Flow

- Telegram Authentication: Users can securely log in through the Telegram bot (@MagisterUniversBot).
- User List: View all registered users.
- Profile Page: Users can view their profiles, but editing is disabled for security purposes.

### Available Scripts

# Backend (NestJS)

- npm run start: Start the server in production mode.
- npm run start:dev: Start the server in development mode (with hot reloading).
- npm run test: Run tests.

# Frontend (Next.js)

- npm run dev: Run the frontend in development mode.
- npm run build: Build the application for production.
- npm run start: Start the production server.
