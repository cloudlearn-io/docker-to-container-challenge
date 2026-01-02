// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static('public'));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API endpoint to get app info
app.get('/api/info', (req, res) => {
    res.json({
        name: 'CloudLearn Container Challenge',
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
        containerized: true
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});