# User Management API Documentation

This API allows managing users. It includes CRUD operations: creating, reading, updating, and deleting users. Additionally, it features validation for email uniqueness and password strength.

## Base URL
```
local
http://localhost:3000
remote
`https://crude-operation-pprb.onrender.com/api` server address
```

## Authentication
Currently, there is no authentication system implemented in this API. You can directly interact with the endpoints.

## Endpoints

### 1. Create a User
- **Endpoint:** `/users`
- **Method:** `POST`
- **Description:** Creates a new user by accepting name, email, and password.

#### Request Body:
```json
{
  "id": 1,
  "name": "Sam Niyo",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
}
```

#### Response (Success):
```json
 {
  "id": 1,
  "name": "Sam Niyo",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
}
```

#### Response (Error: Email already taken):
```json
{
  "statusCode": 400,
  "message": "Email is already taken",
  "error": "Bad Request"
}
```

#### Response (Error: Password too short):
```json
{
  "statusCode": 400,
  "message": "Password must be at least 8 characters long",
  "error": "Bad Request"
}
```

#### Response (Error: Missing Fields):
```json
{
  "statusCode": 400,
  "message": "Bad Request",
  "error": "Bad Request"
}
```

### 2. Get All Users
- **Endpoint:** `/users`
- **Method:** `GET`
- **Description:** Retrieves a list of all users.

#### Response (Success):
```json
[
 {
  "id": 1,
  "name": "Sam Niyo",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
},
  {
    {
  "id": 1,
  "name": "Sam1 Niyo",
  "email": "niyo2.doe@example.com",
  "password": "hashed_password_here"
}
  }
]
```

### 3. Get User by ID
- **Endpoint:** `/users/{id}`
- **Method:** `GET`
- **Description:** Retrieves a single user by their unique ID.

#### Path Parameters:
- `id`: The unique ID of the user (e.g., `1`).

#### Response (Success):
```json
  {
  "id": 1,
  "name": "Sam Niyo",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
}
```

#### Response (Error: User Not Found):
```json
{
  "statusCode": 404,
  "message": "User not found",
  "error": "Not Found"
}
```

### 4. Update User
- **Endpoint:** `/users/{id}`
- **Method:** `PUT`
- **Description:** Updates a user's name and email.

#### Path Parameters:
- `id`: The unique ID of the user (e.g., `1`).

#### Request Body:
```json
{
  "name": "Niyo Updated",
  "email": "john.updated@example.com"
}
```

#### Response (Success):
```json
  {
  "id": 1,
  "name": "Sam Updated",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
}
```

#### Response (Error: User Not Found):
```json
{
  "statusCode": 404,
  "message": "User not found",
  "error": "Not Found"
}
```

### 5. Delete User
- **Endpoint:** `/users/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a user by their unique ID.

#### Path Parameters:
- `id`: The unique ID of the user (e.g., `1`).

#### Response (Success):
```json
{
  "id": 1,
  "name": "Sam Niyo",
  "email": "niyo.doe@example.com",
  "password": "hashed_password_here"
}
```

#### Response (Error: User Not Found):
```json
{
  "statusCode": 404,
  "message": "User not found",
  "error": "Not Found"
}
```

## Error Handling
The API follows a simple error-handling approach using HTTP status codes and descriptive error messages:

- `400 - Bad Request`: When the request has missing or invalid parameters (e.g., email already taken, weak password).
- `404 - Not Found`: When the requested user is not found in the database.
- `500 - Internal Server Error`: In case of unexpected server errors.

## Validation Rules
- **Email:** The email must be unique. If the email is already in use, the API returns a `400 Bad Request` with the message `"Email is already taken"`.
- **Password:** The password must be at least **8 characters long**. If it's shorter, the API returns a `400 Bad Request` with the message `"Password must be at least 8 characters long"`.

## Technologies Used
- **NestJS:** A framework for building efficient, scalable Node.js server-side applications.
- **Prisma:** An ORM for database access.
- **bcrypt:** A library for hashing passwords.
- **Postman:** Used for testing API endpoints.

## API Testing with Postman
To test the API using **Postman**:
1. Open **Postman**.
2. Create a new request.
3. Select the appropriate HTTP method (`GET`, `POST`, `PUT`, `DELETE`).
4. Enter the API URL (e.g., `https://crude-operation-pprb.onrender.com/api/users` or `https://crude-operation-pprb.onrender.com/api/users/1`).
5. If required, add a request body for `POST` or `PUT` requests.
6. Click **Send** and check the response.
