# Jobify - Job Tracking Application

Jobify is a web application built using React (with Vite), Express, and MongoDB. It helps users track job applications, manage profiles, and view statistical insights about their job search.

## Features
- User authentication and registration.
- Job tracking with add, edit, delete functionality.
- Profile management (update personal information and upload avatar).
- Admin panel for managing users and viewing stats.
- View application statistics like pending, interview, and declined jobs.

## Technologies Used
- **Frontend**: React, Vite, React Router, TanStack React Query, React Toastify
- **Backend**: Express, MongoDB, Mongoose, Cloudinary, Multer
- **Authentication**: JWT (JSON Web Tokens)
- **State Management**: React Query
- **Date Formatting**: Day.js

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Vite (for frontend development)

### Installation
- Clone the repository: `git clone https://github.com/Konstantin-Kostov-70/Jobify.git`
- Navigate to the project directory: `cd jobify`
- Install dependencies for the frontend: `cd client && npm install`
- Install dependencies for the backend: `cd server && npm install`

#### Install Packages 
- For client
```sh
npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

```
- For server
```sh
npm install bcryptjs@^2.4.3 cloudinary@^1.37.3 concurrently@^8.0.1 cookie-parser@^1.4.6 datauri@^4.1.0 dayjs@^1.11.9 dotenv@^16.0.3 express@^4.18.2 express-async-errors@^3.1.1 express-mongo-sanitize@^2.2.0 express-rate-limit@^6.8.0 express-validator@^7.0.1 helmet@^7.0.0 http-status-codes@^2.2.0 jsonwebtoken@^9.0.0 mongoose@^7.0.5 morgan@^1.10.0 multer@^1.4.5-lts.1 nodemon@^3.1.5
```

### Environment Variables
- Create a `.env` file in the `server` directory and add the necessary environment variables (e.g., MongoDB URI, JWT secret, Cloudinary).

### Running the Application
- Start the backend server: `cd server && npm run start`
- Start the frontend application: `cd client && npm run dev`

## API Endpoints
- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Login an existing user.
- `GET /jobs`: Get all jobs.
- `POST /jobs`: Create a new job.
- `PATCH /jobs/:id`: Edit a job by ID.
- `DELETE /jobs/:id`: Delete a job by ID.
- `GET /users/current-user`: Get current user information.

## Frontend Structure

```
client
├── src/
│   ├── actions/           # Handles async actions like login, register, etc.
│   ├── components/        # Reusable components
│   ├── pages/             # Page components (Dashboard, Jobs, Profile, etc.)
│   ├── utils/             # Utility functions like API calls, fetch logic
│   ├── App.jsx            # Main App component
│   ├── main.jsx           # Entry point for the React app
│   └── index.css          # Global styles
├── public/
└── vite.config.js         # Vite configuration
```

## Backend Structure
```
/
├── controllers/            # Business logic for handling requests
├── middleware/             # Authentication, validation, error handling
├── models/                 # MongoDB models (User, Job)
├── routes/                 # API routes for authentication, jobs, users
├── utils/                  # Utility functions for passwords, tokens, search, etc.
├── app.js                  # Main Express app setup
├── server.js               # Starts the Express server
└── config/                 # Configuration for database, cloudinary, etc.
```


## License
- This project is licensed under the MIT License.
client/


