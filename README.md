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
PORT=5000
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
| Method | Endpoint               | Description                              |
|--------|------------------------|------------------------------------------|
| GET    | `/heroes`              | Get a list of all heroes                 |
| GET    | `/heroes/:id`          | Get a specific hero by ID                |
| POST   | `/heroes`              | Add a new hero                           |
| PUT    | `/heroes/:id`          | Update an existing hero by ID            |
| DELETE | `/heroes/:id`          | Delete a hero by ID                      |
| GET    | `/villains`            | Get a list of all villains               |

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
http://localhost:5000/docs
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

## Stopping MongoDB
To stop the MongoDB container, run:

```sh
docker-compose down
```

## Contributing
Feel free to submit issues or pull requests to improve this boilerplate! 🚀

