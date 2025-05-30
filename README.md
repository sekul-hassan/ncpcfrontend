# NCPD 2023 JU Team Registration Portal

This is the official team registration portal for **NCPD 2023 (National Collegiate Programming Contest)** organized by **Jahangirnagar University**. The system handled registration and payment for over **1100+ teams** from across the country.

## 🚀 Project Overview

This full-stack web application was developed to streamline the registration process for NCPD 2023. It supports:

- Team registration with university and participant details
- Online payment integration using **bKash API**
- Real-time data updates and validation
- Email confirmation using SMTP

## 🛠️ Tech Stack

**Frontend**:
- [React.js](https://reactjs.org/)
- Axios for HTTP requests
- React Router for navigation

**Backend**:
- [Spring Boot](https://spring.io/projects/spring-boot)
- RESTful API architecture
- Security (JWT based)

**Database**:
- MySQL

**Payment Integration**:
- [bKash API](https://developer.bkash.com/) for online transactions

**Deployment**:
- Hosted on **DigitalOcean Cloud Services**
- Backend and MySQL hosted on Droplet
- Domain and SSL configured

## 🌐 Features

- 📄 Team registration form with validation
- 💳 Online payment via bKash
- 📥 Email notification on successful registration
- 📦 Export team data to CSV

## 📈 Impact

- Over **1100+ teams** successfully registered
- Handled concurrent users and real-time updates
- Reduced manual effort for organizing team data

## 🔧 How to Run Locally

### Prerequisites

- Node.js & npm
- Java 11+
- MySQL
- Maven

### Backend (Spring Boot)

```bash
cd backend
./mvnw spring-boot:run
