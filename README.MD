Great — I've added your deployment link to the README. Here's the updated version with a new section for **Live Demo**:

---

# 📦 Parcel Delivery API

A secure, modular, and role-based backend API for a parcel delivery system, inspired by logistics platforms like Pathao Courier and Sundarban. This RESTful API allows users to register as senders or receivers and perform parcel delivery operations including creation, tracking, cancellation, confirmation, and administrative management.

---

## 🌐 Live Demo

[🚀 Deployed API on Vercel](https://parcel-delevery-system-backend.vercel.app/)

> Use tools like **Postman** or **Hoppscotch** to test the endpoints live.

---

## 📚 Table of Contents

* [Features](#-features)
* [Live Demo](#-live-demo)
* [Installation](#-installation)
* [Usage](#-usage)
* [API Endpoints](#-api-endpoints)
* [Project Structure](#-project-structure)
* [Roles & Access Control](#-roles--access-control)
* [Parcel Status Workflow](#-parcel-status-workflow)
* [Validation & Business Rules](#-validation--business-rules)
* [Technologies Used](#-technologies-used)
* [Configuration](#-configuration)
* [Examples](#-examples)
* [Troubleshooting](#-troubleshooting)
* [Contributors](#-contributors)
* [License](#-license)

---

## 🎯 Features

* 🔐 **JWT Authentication** with hashed passwords (`bcryptjs`)
* 🎭 **Role-based authorization**: Admin, Sender, Receiver
* 📦 **Parcel management**: Create, cancel, track, receive
* 🕓 **Status logs** embedded inside parcel documents
* 🚦 **Status flow tracking**: Requested → Approved → Dispatched → In Transit → Delivered
* 🧩 **Modular code architecture** using Express.js and Mongoose
* 📋 **Postman collection for testing**
* 🧪 Zod-based request validations

---

## ⚙️ Installation

```bash
git clone https://github.com/habibur5313/parcel-delivery-system-backend.git
cd parcel-delivery-system-backend
npm install
```

Create a `.env` file in the root directory:

```env
PORT=5000
DB_URL=mongodb uri
NODE_ENV=development | production

# ADMIN
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=12345678

# JWT
JWT_ACCESS_SECRET=jwt access secret
JWT_ACCESS_EXPIRES=jwt access expires
JWT_REFRESH_SECRET=jwt refresh secret
JWT_REFRESH_EXPIRES=jwt refresh expires

# BCRYPT
BCRYPT_SALT_ROUND=Bcrypt salt round number


# GOOGLE
GOOGLE_CLIENT_SECRET=Google client secret
GOOGLE_CLIENT_ID=Google client id
GOOGLE_CALLBACK_URL=Google callback url
EXPRESS_SESSION_SECRET=Express session secret
FRONTEND_URL=http://localhost:5173 / Frontend url


# CLOUDINARY
CLOUDINARY_CLOUD_NAME=Cloudinary cloud name
CLOUDINARY_API_KEY=cloudinary api key
CLOUDINARY_API_SECRET=cloudinary api secret

```

Run in development mode:

```bash
npm run dev
```

Build and start:

```bash
npm run build
npm start
```

---

## 🚀 Usage

* Use Postman to test endpoints.
* JWT tokens are used to authenticate requests.
* Different roles (sender, receiver, admin) have access to different features.

---

## 🔁 API Endpoints

### 🔐 Auth

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/auth/register` | Register a user   |
| POST   | `/auth/login`    | Login and get JWT |

### 👤 User

| Method | Endpoint    | Description      |
| ------ | ----------- | ---------------- |
| GET    | `/users/me` | Get current user |

### 📦 Parcels

| Method | Endpoint                     | Access    | Description                       |
| ------ | ---------------------------- | --------- | --------------------------------- |
| POST   | `/parcels`                   | Sender    | Create new parcel                 |
| GET    | `/parcels/me`                | Sender    | List sender’s parcels             |
| PATCH  | `/parcels/cancel/:id`        | Sender    | Cancel parcel (if not dispatched) |
| GET    | `/parcels/receiver`          | Receiver  | View incoming parcels             |
| PATCH  | `/parcels/confirm/:id`       | Receiver  | Confirm delivery                  |
| GET    | `/parcels/:id/status-log`    | All Roles | Get status history                |
| GET    | `/parcels`                   | Admin     | View all parcels                  |
| PATCH  | `/parcels/update-status/:id` | Admin     | Update parcel status              |
| PATCH  | `/parcels/block/:id`         | Admin     | Block/Unblock a parcel            |

---

## 📁 Project Structure

```bash
src/
├── app.ts                      # App entry point
├── server.ts                   # for server rendering
├── app/
    ├── modules/
    │   ├── auth/               # Auth controller, service, routes
    │   ├── user/               # User model, service, routes
    │   ├── parcel/             # Parcel model, service, controller
    ├── middlewares/            # Auth, error handling, role check
    ├── config/                 # Environment and database configs
    ├── utils/                  # Utility functions
```

---

## 🛡️ Roles & Access Control

| Role     | Permissions                                                 |
| -------- | ----------------------------------------------------------- |
| Sender   | Create parcels, view/cancel own parcels, view status logs   |
| Receiver | View parcels delivered to them, confirm delivery            |
| Admin    | View/manage all users/parcels, block/unblock, update status |

---

## 🔄 Parcel Status Workflow

```text
Requested → Approved → Dispatched → In Transit → Delivered
```
---

## 🧪 Validation & Business Rules

* ✅ Sender **cannot cancel** if status is beyond "Dispatched"
* ✅ Receiver **can only confirm** if status is "In Transit"
* ❌ Blocked users **cannot access** protected routes
* ✅ Strict role-based access via middleware
* ✅ Each parcel has a **unique tracking ID** (e.g., `TRK-20250803-000123`)

---

## 🛠 Technologies Used

* **Express.js** – API framework
* **Mongoose** – MongoDB ODM
* **Zod** – Schema validation
* **JWT** – Authentication
* **bcryptjs** – Password hashing
* **TypeScript** – Strong typing
* **Passport** – (OAuth, optional)

---

## ⚙️ Configuration

* `.env` for secrets and DB configs
* Middleware-based route protection
* Modular service/repository structure
* Status logs stored as embedded subdocuments in parcels

---

## 🧪 Examples

### Create Parcel

```http
POST /parcels
Authorization: Bearer <JWT>
Body:
{
  "type": "document",
  "weight": 2.5,
  "receiverId": "userId123",
  "pickupAddress": "Sender Location",
  "deliveryAddress": "Receiver Location",
  "fee": 100
}
```

---

## 🛠️ Troubleshooting

* Make sure `.env` is properly configured
* MongoDB must be running and accessible
* Verify role-based access in your headers (JWT)

---

## 👥 Contributors

* **Your Name** – [GitHub Profile](https://github.com/habibur5313)

---