# Smart Lead Dashboard CRM

A full-stack **Lead Management CRM Application** built with **React, TypeScript, Node.js, Express, MongoDB, and JWT Authentication**.

This application allows users to manage leads with authentication, role-based authorization, filtering, search, pagination, dashboard analytics, and CSV export.

---

## Features

### Authentication & Authorization
- JWT Authentication
- Login & Register
- Protected Routes
- Role-Based Access Control (RBAC)
  - **Admin** → Create, Edit, Delete Leads
  - **User** → View Leads Only

### Lead Management (CRUD)
- Create Lead
- View Leads
- Update Lead
- Delete Lead
- View Single Lead Details

### Lead Fields
- Name
- Email
- Status
  - New
  - Contacted
  - Qualified
  - Lost
- Source
  - Website
  - Instagram
  - Referral
- Created At

### Advanced Features
- Search Leads
- Filter by Status
- Filter by Source
- Sorting (Newest / Oldest)
- Pagination
- Dashboard Analytics
- CSV Export
- Responsive Corporate UI

---

## Tech Stack

### Frontend
- React
- TypeScript
- React Router DOM
- Axios
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## Project Structure

```txt
smart-lead-dashboard/

backend/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.ts
│
├── .env
├── package.json

frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── pages/
│   ├── routes/
│   ├── types/
│   └── App.tsx
│
├── package.json

Installation & Setup
Clone Repository:
git clone <your-github-repo-url>

Backend Setup
Go to backend folder:
cd backend

Install dependencies:
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend server:
npm run dev

Server runs on:
http://localhost:5000

Frontend Setup
Go to frontend folder:
cd frontend
Install dependencies:
npm install

Start frontend:
npm run dev

Frontend runs on:
http://localhost:5173

API Endpoints
Authentication
POST /api/auth/register
POST /api/auth/login

Leads
GET    /api/leads
GET    /api/leads/:id
POST   /api/leads
PUT    /api/leads/:id
DELETE /api/leads/:id

Dashboard & CSV
GET /api/leads/stats/dashboard
GET /api/leads/export/csv

Demo Credentials
Admin
Email: admin@test.com
Password: 123456

Author
Mansi Kompale
