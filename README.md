
# 🎟️ Coding Conf — Registration App

Full stack: React + Node.js + PostgreSQL

## 📄 Description

A web application for user registration at a conference, with ticket generation.
Frontend is built with **React**, backend with **Express.js**, and data is stored in **PostgreSQL**.

---

## 🚀 Demo

* The user fills out a registration form.
* The data is saved to the database.
* A ticket with the user's name and email is displayed on the screen.

---

## 📁 Project Structure

```
project/
├── backend/             # Express server
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/            # React client
│   ├── src/
│   ├── package.json
│   └── public/
├── database/
│   └── database_dump.sql
├── .gitignore
├── README.md
```

---

## 🖥️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd project
```

### 2️⃣ Install dependencies

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

---

## 🗄️ Database Setup

### Create the database

Make sure PostgreSQL is installed and running.

```bash
createdb coding_conf
```

### Import the dump

```bash
psql -U <your_user> -d coding_conf < database/database_dump.sql
```

Replace `<your_user>` with your PostgreSQL username.

---

## ⚙️ Run the project

### Backend:

```bash
cd backend
node server.js
```

Server runs at:
[http://localhost:8000](http://localhost:8000)

### Frontend:

```bash
cd frontend
npm start
```

App opens in browser at:
[http://localhost:3000](http://localhost:3000)

---

## 📝 Configuration

In the `backend` folder, create a `.env` file (example in `.env.example`):

```
DB_USER=your_postgres_user
DB_PASSWORD=your_password
DB_NAME=coding_conf
DB_HOST=localhost
DB_PORT=5432
```

---

## 📄 License

MIT

---

🎯 If you’d like, I can also add sections like **Features**, **Contributing**, or **Deployment instructions**. Let me know.
