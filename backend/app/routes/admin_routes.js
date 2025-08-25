const express = require('express');
const PortfolioController = require('../controllers/portfolio_controller');
const ContactController = require('../controllers/contact_controller');

const router = express.Router();

// Portfolio management routes
router.get('/portfolio', PortfolioController.getProjects);
router.post('/portfolio', PortfolioController.createProject);
router.put('/portfolio/:id', PortfolioController.updateProject);
router.delete('/portfolio/:id', PortfolioController.deleteProject);

// Contact submissions management routes
router.get('/contacts', ContactController.getSubmissions);
router.get('/contacts/:id', ContactController.getSubmissionById);
router.put('/contacts/:id', ContactController.updateSubmission);
router.delete('/contacts/:id', ContactController.deleteSubmission);
router.get('/contacts/statistics', ContactController.getStatistics);

// Dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    // Get total projects count
    const totalProjects = await PortfolioController.getProjectCount();
    
    // Get total contact submissions count
    const totalContacts = await ContactSubmission.getCount();
    
    // Get recent activity
    const recentProjects = await PortfolioProject.getRecent(5);
    const recentContacts = await ContactSubmission.getRecent(5);

    res.json({
      success: true,
      data: {
        statistics: {
          totalProjects,
          totalContacts
        },
        recentActivity: {
          projects: recentProjects,
          contacts: recentContacts
        }
      }
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard data',
      error: error.message
    });
  }
});

module.exports = router;
