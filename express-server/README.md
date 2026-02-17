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
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will listen on `http://localhost:8001`.

### Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License. See the LICENSE file for details.