const express = require('express');
const app = express();

app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello CI/CD!' });
});

module.exports = app;
