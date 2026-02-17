# Express Server Project

This is a simple Express server project that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── server.js          # Entry point of the application
├── package.json           # Project configuration and dependencies
├── yarn.lock              # Dependency version lock file
├── nodemon.json           # Configuration for nodemon
├── Dockerfile             # Dockerfile for building the server image
├── .dockerignore          # Files to ignore when building the Docker image
├── .gitignore             # Files to ignore in Git
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Yarn (package manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-8uv3l4gw.git
   cd Anythink-Market-8uv3l4gw/express-server
   ```

2. Install dependencies:
   ```
   # Express Server

   Overview
   -
   This is a small Express.js HTTP server used as a lightweight example alongside a FastAPI-based Python server in the same repository. It exposes a few simple endpoints to manage an in-memory list of "tasks" and demonstrates basic middleware, input validation and centralized error handling.

   Key features
   -
   - Simple JSON API with three endpoints: `GET /`, `GET /tasks`, `POST /tasks`.
   - Request logging middleware (console) and centralized error handler.
   - Basic input validation for `POST /tasks` (ensures `text` is a non-empty string).
   - Dockerfile included for containerized runs.

   Prerequisites
   -
   - Node.js (>= 14)
   - npm (or yarn)

   Install
   -
   Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/Wilcolab/Anythink-Market-8uv3l4gw.git
   cd Anythink-Market-8uv3l4gw/express-server
   npm install
   ```

   Run (development)
   -
   Start the server with automatic reload (nodemon configured in `package.json`):

   ```bash
   npm start
   ```

   By default the server listens on port `8001` (override with `PORT` environment variable).

   Run with Docker
   -
   Build and run the container:

   ```bash
   docker build -t anythink-express .
   docker run -p 8001:8001 anythink-express
   ```

   API Endpoints
   -
   - `GET /` — returns a simple textual greeting (`Hello World`).
   - `GET /tasks` — returns the current in-memory array of tasks in JSON: `{ "tasks": [ ... ] }`.
   - `POST /tasks` — accepts JSON body `{ "text": "task description" }`. On success returns `{ "message": "Task added successfully" }`.

   Validation and error responses
   -
   Invalid requests to `POST /tasks` (missing or empty `text`) return `400` with a JSON payload containing `error` and `message`. Unknown routes return `404`. A centralized error handler returns structured JSON errors and includes a `stack` trace when `NODE_ENV` is not `production`.

   For full details about the error format and examples, see `ERROR_HANDLING.md`.

   Project structure
   -
   ```
   express-server/
   ├─ src/
   │  └─ server.js          # Express app and route definitions
   ├─ package.json          # npm scripts and dependencies
   ├─ Dockerfile            # Container build instructions
   ├─ nodemon.json          # Dev reload config
   ├─ ERROR_HANDLING.md     # Notes about error handling & examples
   └─ README.md             # This file
   ```

   Comparison with Python server
   -
   This repository also includes a small FastAPI server (`python-server`) which exposes the same API. The FastAPI implementation benefits from Pydantic validation out of the box; the Express server demonstrates how to add manual validation and a centralized error handler to obtain similar behavior.

   Notes and recommendations
   -
   - For production use replace the console logger with a structured logger (`winston`, `pino`) and consider request logging with `morgan`.
   - Use a validation library (`joi`, `zod`) for more complex schemas.
   - Persist tasks to a database instead of keeping them in memory.

   License
   -
   See repository root for licensing details.
