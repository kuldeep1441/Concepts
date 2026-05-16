# 📚 Database Integration Guide (FastAPI & Node/NestJS)

---

## 🧠 1. Overview

This guide covers how to use MySQL, PostgreSQL, and MongoDB with FastAPI and Node/NestJS.

| Stack       | MySQL                     | PostgreSQL            | MongoDB         |
| ----------- | ------------------------- | --------------------- | --------------- |
| FastAPI     | SQLAlchemy + PyMySQL      | SQLAlchemy + psycopg2 | Motor / PyMongo |
| Node/NestJS | Prisma / TypeORM / mysql2 | Prisma / TypeORM / pg | Mongoose        |

---

# 🐬 2. FastAPI + MySQL

## Install

pip install sqlalchemy pymysql alembic

## Database URL

DATABASE_URL = "mysql+pymysql://<username>:<password>@<host>:3306/<database>"

## Setup

from sqlalchemy import create_engine

engine = create_engine(DATABASE_URL)

---

# 🐘 3. FastAPI + PostgreSQL

## Install

pip install sqlalchemy psycopg2-binary alembic

## Database URL

DATABASE_URL = "postgresql://<username>:<password>@<host>:5432/<database>"

## Setup

from sqlalchemy import create_engine

engine = create_engine(DATABASE_URL)

---

# 🍃 4. FastAPI + MongoDB

## Install

pip install motor

## Setup

from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient("mongodb://localhost:27017")
db = client["mydb"]

---

# 🐬 5. Node/NestJS + MySQL

## Option 1: Prisma (Recommended)

### Install

npm install prisma @prisma/client

### Init

npx prisma init

### .env

DATABASE_URL="mysql://<username>:<password>@<host>:3306/<database>"

### Schema

datasource db {
provider = "mysql"
url      = env("DATABASE_URL")
}

### Migrate

npx prisma migrate dev

---

## Option 2: TypeORM

### Install

npm install @nestjs/typeorm typeorm mysql2

### Config

TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: 'password',
database: 'mydb',
autoLoadEntities: true,
synchronize: true,
})

---

# 🐘 6. Node/NestJS + PostgreSQL

## Option 1: Prisma

### Install

npm install prisma @prisma/client

### .env

DATABASE_URL="postgresql://<username>:<password>@<host>:5432/<database>"

---

## Option 2: TypeORM

### Install

npm install @nestjs/typeorm typeorm pg

### Config

TypeOrmModule.forRoot({
type: 'postgres',
host: 'localhost',
port: 5432,
username: 'user',
password: 'password',
database: 'mydb',
autoLoadEntities: true,
synchronize: true,
})

---

# 🍃 7. Node/NestJS + MongoDB

## Using Mongoose

### Install

npm install @nestjs/mongoose mongoose

### Config

MongooseModule.forRoot("mongodb://localhost:27017/mydb")

---

# 🔐 8. Environment Variables

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydb

---

# ⚠️ 9. Best Practices

* Do not use root user in production
* Always use environment variables
* Use migrations (Alembic / Prisma)
* Enable connection pooling
* Secure DB with IP whitelisting
* Do not expose DB credentials to frontend

---

# 🚀 10. Recommendations

| Use Case             | Recommendation                         |
| -------------------- | -------------------------------------- |
| MVP / Quick Build    | MySQL + FastAPI                        |
| Scalable System      | PostgreSQL + FastAPI                   |
| Real-time / Flexible | MongoDB                                |
| TypeScript Backend   | NestJS + Prisma (PostgreSQL preferred) |

---

# 📌 11. Example Connection Strings

## MySQL

mysql+pymysql://user:password@localhost:3306/mydb

## PostgreSQL

postgresql://user:password@localhost:5432/mydb

## MongoDB

mongodb://localhost:27017/mydb

---
