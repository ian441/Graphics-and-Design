const express = require('express');
const cors = require('cors');
const { pool, createTables, insertSampleData } = require('./db');
const { authRoutes, portfolioRoutes, contactRoutes, adminRoutes } = require('./app/routes/__init__');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Only create tables and insert data if not in test environment
if (process.env.NODE_ENV !== 'test') {
  createTables();
  insertSampleData();
}

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Only start the server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

// Export the app for testing
module.exports = app;
