# Travel Diary Platform Backend

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Object-Oriented Programming (OOP)](#object-oriented-programming-oop)
- [Advantages of OOP in the Project](#advantages-of-oop-in-the-project)

## Overview

The Travel Diary Platform Backend is a Node.js application built with Express.js and Sequelize ORM, providing RESTful API endpoints for managing user registration, authentication, profile management, and travel diary entries. The application demonstrates the application of Object-Oriented Programming (OOP) concepts to create modular, maintainable, and scalable code.

### Live link : [https://travel-diary-backend-eixf.onrender.com](https://travel-diary-backend-eixf.onrender.com)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/axxxay/Travel-Diary-Backend.git
   cd travel-diary-backend
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Set up environment variables:**
    - Create a .env file in the root directory and configure the following variables:
    ```bash
    ACCESS_TOKEN_SECRET=swivl
    ```
4. **Run migrations (optional):**
    ```bash
    npm run migrate
    ```
5. **Start the server:**
    ```
    npm start
    ```

## Usage

 - Access the API endpoints using tools like Postman or cURL.
 - Refer to the API Endpoints section below for detailed documentation on each endpoint.
 - Ensure to set appropriate headers (e.g., Content-Type, Authorization) for requests.

## API Endpoints

### User Routes

- #### POST /user/register
    - Request Headers:
        ```
        Content-Type: application/json
        ```

    - Request Body:
        ```
        {
            "username": "JohnDoe",
            "email": "john@doe.com",
            "password": "John@123",
            "age": 22
        }
        ```

    - Response:
        ```
        {
            "success": "User created successfully"
        }
        ```

- #### POST /user/login
    - Request Headers:
        ```
        Content-Type: application/json
        ```

    - Request Body:
        ```
        {
            "email": "john@doe.com",
            "password": "John@123"
        }
        ```

    - Response:
        ```
        {
            "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFrc2hheUBlbWFpbC5jb20iLCJpYXQiOjE3MTMxMDgzNDgsImV4cCI6MTcxNTcwMDM0OH0.sPdzmFe20S8-LlL-IirrHoGpIn2Ir5CxkTaR7vjaJHM"
        }
        ```

- #### PUT /user/update
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        Content-Type: application/json
        ```

    - Request Body:
        ```
        {
            "username": "JohnDoe",
            "email": "john@doe.com",
            "password": "John@123",
            "age": 22
        }
        ```

    - Response:
        ```
        {
            "success": "User updated successfully"
        }
        ```
    ### Diary Entry Routes

- #### GET /diary/get
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        ```

    - Response:
        ```
        [
            {
                "id": "4c1cddde-50d3-46be-a183-3f5f2d291f01",
                "title": "My second diary",
                "description": "This is my second diary entry",
                "date": "2021-10-01 00:00:00.000 +00:00",
                "location": "bangalore",
                "photos": [
                "http://photo1.com",
                "http://photo2.com"
                ],
                "userEmail": "akshay@email.com",
                "createdAt": "2024-04-14T14:46:44.891Z",
                "updatedAt": "2024-04-14T14:46:44.891Z"
            }, 
            {
                ...
            }
        ]
        ```

- #### GET /diary/get/:id
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        ```


    - Response:
        ```
        {
            "id": "4c1cddde-50d3-46be-a183-3f5f2d291f01",
            "title": "My second diary",
            "description": "This is my second diary entry",
            "date": "2021-10-01 00:00:00.000 +00:00",
            "location": "bangalore",
            "photos": [
            "http://photo1.com",
            "http://photo2.com"
            ],
            "userEmail": "akshay@email.com",
            "createdAt": "2024-04-14T14:46:44.891Z",
            "updatedAt": "2024-04-14T14:46:44.891Z"
        }
        ```

- #### POST /diary/create
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        Content-Type: application/json
        ```

    - Request Body:
        ```
        {
            "title": "My second diary",
            "description": "This is my second diary entry",
            "date": "2021-10-01",
            "location": "bangalore",
            "photos": ["http://photo1.com", "http://photo2.com"]
        }
        ```

    - Response:
        ```
        {
            "success": "Diary entry created successfully"
        }
        ```

- #### PUT /diary/update/:id
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        Content-Type: application/json
        ```

    - Request Body:
        ```
        {
            "title": "My first diary",
            "description": "This is my updated diary entry",
            "date": "2021-10-01",
            "location": "bangalore",
            "photos": ["http://photo1.com", "http://photo2.com"]
        }
        ```

    - Response:
        ```
        {
            "success": "Diary entry updated successfully"
        }
        ```

- #### DELETE /diary/delete/:id
    - Request Headers:
        ```
        Authorization: Bearer your_access_token
        ```

    - Response:
        ```
        {
            "success": "Diary entry deleted successfully"
        }
        ```

## Object-Oriented Programming (OOP)

- The application leverages Object-Oriented Programming (OOP) concepts by organizing code into modular classes and following principles such as encapsulation, inheritance, and polymorphism.

## Advantages of OOP in the Project

- Modularity: OOP allows for modular design, making it easier to manage and scale the codebase.
- Encapsulation: Data and methods are encapsulated within classes, enhancing data security and code organization.
- Inheritance: Reusability is improved through inheritance, as classes can inherit properties and methods from parent classes.
- Polymorphism: Different classes can implement the same method in different ways, enhancing flexibility and extensibility.

## Login Credentials
    ```
        email: akshay@email.com
        password: Akshay@123

        email: john@doe.com
        password: John@123