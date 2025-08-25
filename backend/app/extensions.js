// This file can be used to initialize any extensions or middleware
// that need to be shared across the application

const { pool } = require('../db');

// Example: Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Verify token logic would go here
  // For now, we'll just add a placeholder
  req.user = { id: 1, username: 'demo' };
  next();
};

// Example: Admin authorization middleware
const requireAdmin = (req, res, next) => {
  // Check if user is admin
  // This is a placeholder - implement actual admin check
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ error: 'Admin access required' });
  }
};

module.exports = {
  authenticateToken,
  requireAdmin,
  // Add other extensions here
};
