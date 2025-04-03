# Node.js CRUD API

## Overview
This is a basic **Node.js** project demonstrating CRUD (Create, Read, Update, Delete) operations without using Express.js. The project uses **HTTP module** to handle server requests and **File System (fs)** to store data.

## Features
- Create, Read, Update, and Delete (CRUD) operations
- Uses Node.js built-in modules (HTTP, FS, URL)
- No external dependencies like Express.js
- Handles JSON data for API requests

## Prerequisites
Before running this project, make sure you have:
- [Node.js](https://nodejs.org/) installed on your machine

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/nodejs-crud.git
   ```
2. Navigate to the project directory:
   ```sh
   cd nodejs-crud
   ```
3. Initialize a Node.js project (if not done already):
   ```sh
   npm init -y
   ```

## Running the Server
Start the Node.js server using:
```sh
node server.js
```
The server will start on `http://localhost:3000`

## API Endpoints
Here are the available API routes:

### 1. Create Data (POST)
- **URL:** `/create`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- **Description:** Adds a new user to the JSON file.

### 2. Read Data (GET)
- **URL:** `/read`
- **Method:** `GET`
- **Description:** Retrieves all stored users.

### 3. Update Data (PUT)
- **URL:** `/update`
- **Method:** `PUT`
- **Request Body:**
  ```json
  {
    "id": 1,
    "name": "John Smith",
    "email": "johnsmith@example.com"
  }
  ```
- **Description:** Updates an existing user's details.

### 4. Delete Data (DELETE)
- **URL:** `/delete`
- **Method:** `DELETE`
- **Request Body:**
  ```json
  {
    "id": 1
  }
  ```
- **Description:** Deletes a user by ID.

## File Structure
```
nodejs-crud/
│── data.json          # Stores user data in JSON format
│── server.js          # Main Node.js server file
│── package.json       # Node.js project configuration
└── README.md          # Project documentation
```

## Built With
- [Node.js](https://nodejs.org/)
- [HTTP Module](https://nodejs.org/api/http.html)
- [File System Module](https://nodejs.org/api/fs.html)

## Future Enhancements
- Add Express.js for better routing and middleware support
- Integrate a database (MongoDB, MySQL, or PostgreSQL)
- Implement authentication and authorization

## Author
[Ananya A H](https://github.com/ananyaanuharish)

