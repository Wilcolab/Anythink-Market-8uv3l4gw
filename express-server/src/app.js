const express = require('express');

const app = express();

app.use(express.json());

let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box",
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

function httpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/tasks', (req, res, next) => {
  try {
    const { text } = req.body;
    if (!text || typeof text !== 'string') return next(httpError(400, 'Field "text" is required and must be a string'));
    tasks.push(text);
    res.json({ message: 'Task added successfully' });
  } catch (err) {
    next(err);
  }
});

app.get('/tasks', (req, res) => {
  res.json({ tasks });
});

// 404 handler
app.use((req, res, next) => {
  next(httpError(404, 'Not Found'));
});

// Error handler
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
