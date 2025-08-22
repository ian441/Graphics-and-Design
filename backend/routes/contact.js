const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats
} = require('../controllers/contactController');
const { authenticateToken, requireRole } = require('../middleware/auth');

// Public routes
router.post('/', createContact);

// Protected routes (admin only)
router.get('/', authenticateToken, requireRole(['admin', 'editor']), getAllContacts);
router.get('/stats', authenticateToken, requireRole(['admin', 'editor']), getContactStats);
router.get('/:id', authenticateToken, requireRole(['admin', 'editor']), getContactById);
router.patch('/:id/status', authenticateToken, requireRole(['admin', 'editor']), updateContactStatus);
router.delete('/:id', authenticateToken, requireRole(['admin']), deleteContact);

module.exports = router;
