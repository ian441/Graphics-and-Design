const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  getAllUsers,
  updateUser
} = require('../controllers/authController');
const { authenticateToken, requireRole } = require('../middleware/auth');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (authenticated users)
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.put('/change-password', authenticateToken, changePassword);

// Admin only routes
router.get('/users', authenticateToken, requireRole(['admin']), getAllUsers);
router.put('/users/:id', authenticateToken, requireRole(['admin']), updateUser);

module.exports = router;
