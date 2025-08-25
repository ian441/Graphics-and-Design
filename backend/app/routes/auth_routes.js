const express = require('express');
const AuthController = require('../controllers/auth_controller');

const router = express.Router();

// Register a new user
router.post('/register', AuthController.register);

// Login user
router.post('/login', AuthController.login);

// Get user profile
router.get('/profile', AuthController.getProfile);

module.exports = router;
