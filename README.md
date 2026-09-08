# PawCare — Pet Adoption & Services Platform

PawCare is a full-stack MERN web application designed to connect users with adoptable pets and pet-care services. It provides a centralized platform for pet adoption, service bookings, and management.

## Features

* Browse and search adoptable pets
* View pet details including breed, age, size, health, and location
* Submit and track adoption requests
* Explore pet-care services such as grooming, vaccination, boarding, and training
* Book pet-care services
* Admin dashboard for managing pets, services, adoption requests, and bookings
* JWT-based authentication and authorization

## Tech Stack

**Frontend:** React.js, React Router, Axios, CSS/Tailwind CSS
**Backend:** Node.js, Express.js, REST APIs
**Database:** MongoDB, Mongoose, MongoDB Atlas
**Authentication:** JWT
**Tools:** Git, GitHub, Postman, VS Code

## Project Structure

```text
PawCare
├── client
│   └── React.js Frontend
├── server
│   └── Node.js + Express.js Backend
└── MongoDB
    ├── Users
    ├── Pets
    ├── Adoption Requests
    ├── Services
    └── Bookings
```

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd PawCare
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the backend:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Run the Project

```bash
npm run dev
```

## Future Enhancements

* Online payment integration
* Real-time chat support
* Native mobile application
* Enhanced notifications and analytics

## Team

**GLA University — Department of Computer Science & Engineering**

* Priya Chauhan — 2415001192
* Prakhar Chaurasia — 2415001130
* Mannat Rai — 2415000942 (Team Leader)
* Om Pathak — 2415001072
* Prince Kumar Sharma — 2415001187

**Faculty Guide:** Mr. Akash Kumar Choudhary
