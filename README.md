# 📦 Inventory Management System (IMS)

A full-featured **Inventory Management System** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
This system allows admins and salesmen to efficiently manage products, customers, invoices, stock levels, and profit tracking.

---

## 🚀 Features

### 👤 **User Roles**
- **Admin**
  - Add, update, delete products
  - Add/remove salesmen
  - Add product categories
  - View sales and profit reports
  - Manage customers
  - Full access to all features
- **Salesman**
  - Update own profile
  - Create invoices/orders for customers
  - View own sales performance

---

### 📦 **Inventory**
- Add products with purchase price, sales price, stock quantity
- Auto-update stock when orders are placed
- Category management

### 🧾 **Orders / Invoices**
- Create invoices with multiple products
- Store purchase and sales price snapshot per order for accurate profit
- Calculate total order amount and profit

### 👥 **Customers**
- Store customer details: name, phone, email, address

### 📊 **Reports**
- Generate profit and sales reports
- Filter reports by date range
- Calculate total profit (sales price - purchase price)

---

## 🗂️ Tech Stack

| Layer | Tech |
| ------ | ---- |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Frontend** | React.js, React Router, Context API or Redux |
| **Auth** | JWT-based authentication & role-based access control |
| **Styling** | Tailwind CSS |
| **Other** | Axios, bcrypt, dotenv |

---


