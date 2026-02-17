const express = require('express');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(express.json());

// Simple request logger middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - Body: ${JSON.stringify(req.body)}`);
    next();
});

let tasks = [
    'Write a diary entry from the future',
    'Create a time machine from a cardboard box',
    'Plan a trip to the dinosaurs',
    'Draw a futuristic city',
    'List items to bring on a time-travel adventure'
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/tasks', (req, res, next) => {
    try {
        const { text } = req.body;
        if (!text || typeof text !== 'string' || text.trim() === '') {
            const err = new Error('Field "text" is required and must be a non-empty string');
            err.status = 400;
            throw err;
        }
        tasks.push(text);
        res.json({ message: 'Task added successfully' });
    } catch (err) {
        next(err);
    }
});

app.get('/tasks', (req, res, next) => {
    try {
        res.json({ tasks });
    } catch (err) {
        next(err);
    }
});

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found', message: `Cannot ${req.method} ${req.originalUrl}` });
});

// Centralized error handler
app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status || 500;
    const payload = {
        error: err.name || 'Error',
        message: err.message || 'Internal Server Error'
    };
    if (process.env.NODE_ENV !== 'production') {
        payload.stack = err.stack;
    }
    res.status(status).json(payload);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});