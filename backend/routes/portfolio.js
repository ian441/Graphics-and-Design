const express = require('express');
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  getProjectsByCategory,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject,
  getCategories,
  getProjectStats
} = require('../controllers/portfolioController');
const { authenticateToken, requireRole } = require('../middleware/auth');
const { uploadSingle } = require('../middleware/upload');

// Public routes
router.get('/', getAllProjects);
router.get('/categories', getCategories);
router.get('/featured', getFeaturedProjects);
router.get('/category/:category', getProjectsByCategory);
router.get('/:id', getProjectById);

// Protected routes (admin/editor only)
router.post(
  '/',
  authenticateToken,
  requireRole(['admin', 'editor']),
  uploadSingle('image'),
  createProject
);

router.put(
  '/:id',
  authenticateToken,
  requireRole(['admin', 'editor']),
  uploadSingle('image'),
  updateProject
);

router.delete(
  '/:id',
  authenticateToken,
  requireRole(['admin']),
  deleteProject
);

// Admin only routes
router.get(
  '/admin/stats',
  authenticateToken,
  requireRole(['admin']),
  getProjectStats
);

module.exports = router;
