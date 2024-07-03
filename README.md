# CRUD Operations App

This is a full-stack CRUD application using React for the frontend and Express.js with MongoDB for the backend.

## Features

- Add new tasks
- View existing tasks
- Update tasks
- Delete tasks
- User-friendly interface
- RESTful API

## Requirements

- Node.js
- MongoDB

## Setup

### Backend Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>/backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your MongoDB URI and port:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the backend server:
    ```sh
    npm start
    ```
    The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the frontend development server:
    ```sh
    npm start
    ```
    The frontend application will run on `http://localhost:3000`.

## Usage

1. Ensure the backend server is running.
2. Open your browser and go to `http://localhost:3000`.
3. You can now add, view, update, and delete tasks using the application.

## Project Structure

- **Backend:**
  - `controllers/`: Contains the logic for handling API requests.
  - `models/`: Contains Mongoose models.
  - `routes/`: Contains route definitions.
  - `Server.js`: Main server file.

- **Frontend:**
  - `public/`: Contains the HTML template.
  - `src/`: Contains the source code.
    - `components/`: Contains React components.
    - `utils/`: Contains utility files such as constants.
    - `App.js`: Main React component.
    - `index.js`: Entry point of the application.

## API Endpoints

### Base URL: `http://localhost:5000/api`

- **GET /get**
  - Fetch all tasks
  - Response: JSON array of tasks

- **POST /save**
  - Add a new task
  - Request body: `{ "task": "Your task here" }`
  - Response: JSON object of the created task

- **PUT /update/:id**
  - Update an existing task
  - Request body: `{ "task": "Updated task" }`
  - Response: Success message

- **DELETE /delete/:id**
  - Delete a task
  - Response: Success message

