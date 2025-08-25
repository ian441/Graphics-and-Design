const express = require('express');
const ContactController = require('../controllers/contact_controller');

const router = express.Router();

// Create a new contact submission
router.post('/', ContactController.createContact);

// Get all contact submissions (admin only)
router.get('/', ContactController.getSubmissions);

// Get contact submission by ID (admin only)
router.get('/:id', ContactController.getSubmissionById);

// Get submissions by email (admin only)
router.get('/email/:email', ContactController.getSubmissionsByEmail);

// Update contact submission (admin only)
router.put('/:id', ContactController.updateSubmission);

// Delete contact submission (admin only)
router.delete('/:id', ContactController.deleteSubmission);

// Get recent submissions (admin only)
router.get('/recent', ContactController.getRecentSubmissions);

// Get submission statistics (admin only)
router.get('/statistics', ContactController.getStatistics);

module.exports = router;
