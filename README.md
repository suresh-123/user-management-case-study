# Local Development Guide

This guide will walk you through the steps to run the backend and frontend applications locally on your machine, as well as how to build and run the Docker containers using Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version >= 18.0.0)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [MongoDB](https://www.mongodb.com/) (for the backend application)
- [Docker](https://www.docker.com/) (for running Docker containers)

## Clone Repository

1. Clone the repository:

   ```bash
   git clone https://github.com/suresh-123/user-management-case-study.git
   ```

2. Navigate to the cloned repository:

   ```bash
   cd user-management-case-study
   ```

## Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the `backend` directory and add the following:

   ```plaintext
   DB_USER=root
   DB_PASS=password
   DB_NAME=mydatabase
   ```

   Adjust the values according to your MongoDB configuration.

4. Start the backend server in development mode:

   ```bash
   npm run start:dev
   ```

   The backend server should now be running on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

   The frontend development server should now be running on `http://localhost:3000`, and your default browser should automatically open to this address.

## Accessing the Application

You can now access the application by navigating to `http://localhost:3000` in your web browser. The frontend should communicate with the backend running on `http://localhost:5000`.

## Docker Setup

1. Ensure Docker is installed and running on your machine.

2. In the root directory of your project, run the following commands to build and start the Docker containers:

   ```bash
   docker-compose build
   docker-compose up
   ```

   This will build and start the Docker containers for the backend, frontend, and MongoDB database as specified in the `docker-compose.yml` file.

## Backend API Endpoints

### 1. Create a New User

- **Method**: POST
- **Endpoint**: `/api/v1/users`
- **Request Body**:

  ```json
  {
    "firstName": "Michael",
    "lastName": "Leo",
    "email": "Michael.leo@dummy.com"
  }
  ```

- **Sample Response:**:
  ```json
  {
    "success": true,
    "message": "Data saved successfully.",
    "data": {
      "user": {
        "userId": "898bf362-6ca9-44d4-b062-e3656a07c4e2",
        "firstName": "Michael",
        "lastName": "Leo",
        "email": "Michael.leo@dummy.com",
        "createdAt": "2024-05-26T11:24:48.967Z",
        "updatedAt": "2024-05-26T11:24:48.967Z"
      }
    }
  }
  ```

### 2. Get User List (Paginated)

- **Method**: GET
- **Endpoint**: `/api/v1/users?page=1&per_page=10`
- **Sample Response:**:
  ```json
  {
    "success": true,
    "message": "Data loaded successfully",
    "data": {
      "users": [
        {
          "userId": "898bf362-6ca9-44d4-b062-e3656a07c4e2",
          "firstName": "Michael",
          "lastName": "Leo",
          "email": "Michael.leo@dummy.com",
          "createdAt": "2024-05-26T11:24:48.967Z",
          "updatedAt": "2024-05-26T11:24:48.967Z"
        }
      ],
      "totalCount": 22
    }
  }
  ```

## Additional Notes

- Make sure MongoDB is running locally on the default port (`27017`) before starting the backend server or Docker containers.
- The backend expects MongoDB connection details to be provided via environment variables. Adjust the `.env` file accordingly.
- Both the backend and frontend should automatically reload when you make changes to the source code.
