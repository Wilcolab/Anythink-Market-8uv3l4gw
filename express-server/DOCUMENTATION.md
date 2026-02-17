# Express Server — API and Tests

This document describes the API endpoints implemented in the Express server, how to run the server locally, run tests, and how error handling works.

## Endpoints

- `GET /` — returns `Hello World` (200)
- `GET /tasks` — returns a JSON object `{ tasks: [...] }` with the current tasks
- `POST /tasks` — accepts JSON `{ text: string }`, appends the new task and returns `{ message: 'Task added successfully' }` (400 if invalid payload)

## Error handling

- 404 handler returns `{ error: 'Not Found' }` with status 404 for unknown routes
- Central error handler logs the error (to console) and returns `{ error: '<message>' }` with status code from the error or 500

## Run locally (development)

Install dependencies and start nodemon:

```bash
cd express-server
yarn install
yarn start
```

Server will listen on port `8001` by default.

## Tests

Tests are written with `jest` and `supertest`.

Run:

```bash
cd express-server
yarn install
yarn test
```

The test suite covers happy paths and error cases for the API.

## Docker / Compose

The project already includes a `Dockerfile` and the repository `docker-compose.yml` starts the Node service on port `8001`.
