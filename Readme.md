# My Courses Project

## Overview
The **My Courses** project is a web application designed for managing online courses, instructors, and users. It supports features like course enrollment, user reviews, and lesson management. The backend is built with **Node.js** and **Express**, while the database uses **PostgreSQL**. **Prisma** is used as the ORM to manage the database schema and queries.

## Features
- Course management (create, update, delete courses).
- User management (create, update, delete users).
- Instructor and course relationship (each course has an instructor).
- Enrollment in courses by users.
- Reviews and ratings for courses.
- Lesson management (add, update, delete lessons for each course).

## Technologies Used
- **Node.js** - Backend JavaScript runtime.
- **Express** - Web framework for Node.js.
- **PostgreSQL** - Relational database management system.
- **Prisma** - ORM to interact with PostgreSQL.
- **CUID** - For generating unique identifiers for entities.

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 14 or above): [Download Node.js](https://nodejs.org/)
- **PostgreSQL** (version 12 or above): [Download PostgreSQL](https://www.postgresql.org/download/)

### Steps to Set Up

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SaidAzmour9/mycourses_backend.git
   ```

2. **Install dependencies**:
   Run the following command to install required packages:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your PostgreSQL connection string:
   ```bash
   DATABASE_URL="postgresql://username:password@localhost:5432/DBname"
   ```

4. **Create and apply migrations**:
   Run the following Prisma command to generate and apply migrations to your database:
   ```bash
   npx prisma migrate dev
   ```



5. **Start the development server**:
   To start the backend server, run:
   ```bash
   npm run dev
   ```

   This will start the server on `http://localhost:3000`.

## API Endpoints

### User Routes
- **POST /users**: Create a new user.
- **GET /users/:id**: Get details of a user by ID.
- **PUT /users/:id**: Update a user by ID.
- **DELETE /users/:id**: Delete a user by ID.

### Course Routes
- **POST /courses**: Create a new course.
- **GET /courses**: Get all courses.
- **GET /courses/:id**: Get a course by ID.
- **PUT /courses/:id**: Update a course by ID.
- **DELETE /courses/:id**: Delete a course by ID.

### Enrollment Routes
- **POST /enrollments**: Enroll a user in a course.
- **GET /enrollments**: Get all enrollments.
- **GET /enrollments/:id**: Get an enrollment by ID.

### Review Routes
- **POST /reviews**: Create a review for a course.
- **GET /reviews**: Get all reviews for a course.
- **GET /reviews/:id**: Get a review by ID.

### Lesson Routes
- **POST /lessons**: Create a new lesson for a course.
- **GET /lessons**: Get all lessons for a course.
- **GET /lessons/:id**: Get a lesson by ID.
- **PUT /lessons/:id**: Update a lesson by ID.
- **DELETE /lessons/:id**: Delete a lesson by ID.

## Prisma Schema

The Prisma schema is located in `prisma/schema.prisma`. It defines the database models and relationships. The main models are:
- **User**: Stores user data (e.g., name, email, password).
- **Course**: Represents a course with attributes such as title, description, price, and instructor.
- **Enrollment**: Stores which user is enrolled in which course.
- **Review**: Stores reviews and ratings for courses.
- **Lesson**: Represents lessons associated with a course.
- **Category**: Categorizes courses (e.g., Programming, Design).



## License
This project is licensed under the MIT License 