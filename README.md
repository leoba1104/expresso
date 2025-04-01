# Expresso

## Overview
This is a boilerplate for building REST APIs using Express, TypeScript, and MongoDB. It includes basic configurations, database setup, and a simple structure to start quickly.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Installation
Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd <repo-folder>
npm install
```

## Environment Variables
Create a `.env` file in the root directory and configure the following variables:

```
MONGO_URL=mongodb://admin:secret@localhost:27017/expresso_db?authSource=admin
PORT=3000
JWT_SECRET=your_long_secure_random_string_here
```

## Running MongoDB with Docker
To start the MongoDB container:

```sh
docker-compose up -d
```

This will run MongoDB in the background.

## Seeding the Database
To populate the database with initial data, run:

```sh
npm run seed
```

This will insert predefined heroes and villains into MongoDB.

## Running the Application
Start the API server:

```sh
npm run dev
```

The server will be available at `http://localhost:5000/`.

## API Endpoints
| Method | Endpoint         | Description                       |
|--------|------------------|-----------------------------------|
| GET    | `/heroes`        | Get a list of all heroes          |
| GET    | `/heroes/:id`    | Get a specific hero by ID         |
| POST   | `/heroes`        | Add a new hero                    |
| PUT    | `/heroes/:id`    | Update an existing hero by ID     |
| DELETE | `/heroes/:id`    | Delete a hero by ID               |
| GET    | `/villains`      | Get a list of all villains        |
| POST   | `/auth/register` | Register a new User               |
| POST   | `/auth/login`    | Login a user and get a JWT token  |

## JWT Authentication
The API uses JWT (JSON Web Token) for authentication.

When a user logs in, the server generates a JWT token that can be used for authenticating subsequent requests.

The `/auth/register` route is protected and requires a valid JWT token for access. Only users who have a valid token (obtained via `/auth/login`) can register new users.

## Protecting Routes with JWT
To access protected routes, include the JWT token in the Authorization header as a Bearer token. Example:
```sh
Authorization: Bearer <your-jwt-token>
```
### Example Request to Protected Route:
```sh
curl -H "Authorization: Bearer <your-jwt-token>" http://localhost:3000/heroes
```

## Token Expiry
JWT tokens expire after a set time (e.g., 1 hour). You will need to log in again to obtain a new token.

## Logging
This project uses **Winston** for logging. Logs are categorized into different levels:
- `error` (critical issues)
- `warn` (warnings)
- `info` (general application events)
- `http` (HTTP requests with response times)
- `debug` (detailed debugging information)

Logs are stored in the `logs/` folder:
- `logs/error.log`: Stores error messages.
- `logs/all.log`: Stores all log messages.

### Example Log Output:
```
2025-03-27 14:05:30:ms info: ✅ Connected to MongoDB
2025-03-27 14:05:31:ms http: GET /heroes 200 - 15ms
```

## API Documentation
The API documentation is generated using **Swagger** and can be accessed at:

```
http://localhost:3000/docs
```

### How It Works:
- Swagger reads annotations from route files to generate interactive API docs.
- Documentation is defined in JSDoc comments using `@swagger` tags.
- You can test endpoints directly from the Swagger UI.

## Linting and Formatting
To lint and format the code, run:

```sh
npm run lint
npm run format
```

## Running Tests
To execute tests, run:

```sh
npm test
```

## Continuous Integration (CI/CD)
This project uses **GitHub Actions** for continuous integration. The CI pipeline ensures that every push and pull request meets quality standards before merging.

### Workflow Includes:
- **Linting**: Ensures code quality using ESLint and Prettier.
- **Testing**: Runs all test cases to check API functionality.
- **Building**: Ensures the project builds successfully.

## Stopping MongoDB
To stop the MongoDB container, run:

```sh
docker-compose down
```

## Contributing
Feel free to submit issues or pull requests to improve this boilerplate! 🚀

