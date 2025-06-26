# SurveyApp

A backend REST API to create and manage surveys with nested questions and options, built using **Node.js**, **Express**, **Prisma ORM**, and **PostgreSQL**.

## Setup

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/surveyapp.git
cd surveyapp
npm install

### 2. Configure .env
DATABASE_URL=postgresql://user:password@localhost:5432/surveydb
PORT=3000

### 3. Prisma Setup
npx prisma migrate dev --name init
npx prisma generate

### 4. Run Server
node src/server.js

Tech Stack
Node.js + Express.js
Prisma ORM + PostgreSQL
REST API
Postman for testing

Features
Nested creation of questions/options
Cascading deletes via Prisma
Clean MVC structure
Easy Postman testing
