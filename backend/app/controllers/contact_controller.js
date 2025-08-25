const { ContactSubmission } = require('../models');

class ContactController {
  // Create a new contact submission
  static async createContact(req, res) {
    try {
      const { name, email, company, message } = req.body;

      // Basic validation
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Name, email, and message are required'
        });
      }

      const submission = await ContactSubmission.create({
        name,
        email,
        company,
        message
      });

      res.status(201).json({
        success: true,
        message: 'Contact submission received successfully',
        data: submission
      });
    } catch (error) {
      console.error('Error creating contact submission:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to submit contact form',
        error: error.message
      });
    }
  }

  // Get all contact submissions (admin only)
  static async getSubmissions(req, res) {
    try {
      const { email, startDate, endDate, page = 1, limit = 20 } = req.query;
      
      const filters = {};
      if (email) {
        filters.email = email;
      }
      if (startDate) {
        filters.startDate = new Date(startDate);
      }
      if (endDate) {
        filters.endDate = new Date(endDate);
      }

      // Calculate pagination
      const offset = (page - 1) * limit;
      filters.limit = parseInt(limit);
      filters.offset = offset;

      const submissions = await ContactSubmission.findAll(filters);
      const totalSubmissions = await ContactSubmission.getCount(filters);

      res.json({
        success: true,
        data: submissions,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalSubmissions,
          pages: Math.ceil(totalSubmissions / limit)
        }
      });
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch contact submissions',
        error: error.message
      });
    }
  }

  // Get contact submission by ID (admin only)
  static async getSubmissionById(req, res) {
    try {
      const { id } = req.params;
      const submission = await ContactSubmission.findById(id);

      if (!submission) {
        return res.status(404).json({
          success: false,
          message: 'Contact submission not found'
        });
      }

      res.json({
        success: true,
        data: submission
      });
    } catch (error) {
      console.error('Error fetching contact submission:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch contact submission',
        error: error.message
      });
    }
  }

  // Get submissions by email (admin only)
  static async getSubmissionsByEmail(req, res) {
    try {
      const { email } = req.params;
      const submissions = await ContactSubmission.findByEmail(email);

      res.json({
        success: true,
        data: submissions
      });
    } catch (error) {
      console.error('Error fetching submissions by email:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch submissions by email',
        error: error.message
      });
    }
  }

  // Update contact submission (admin only)
  static async updateSubmission(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const submission = await ContactSubmission.findById(id);
      if (!submission) {
        return res.status(404).json({
          success: false,
          message: 'Contact submission not found'
        });
      }

      const updatedSubmission = await submission.update(updateData);

      res.json({
        success: true,
        message: 'Contact submission updated successfully',
        data: updatedSubmission
      });
    } catch (error) {
      console.error('Error updating contact submission:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update contact submission',
        error: error.message
      });
    }
  }

  // Delete contact submission (admin only)
  static async deleteSubmission(req, res) {
    try {
      const { id } = req.params;

      const submission = await ContactSubmission.findById(id);
      if (!submission) {
        return res.status(404).json({
          success: false,
          message: 'Contact submission not found'
        });
      }

      await submission.delete();

      res.json({
        success: true,
        message: 'Contact submission deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting contact submission:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete contact submission',
        error: error.message
      });
    }
  }

  // Get recent submissions (admin only)
  static async getRecentSubmissions(req, res) {
    try {
      const { limit = 10 } = req.query;
      const submissions = await ContactSubmission.getRecent(parseInt(limit));

      res.json({
        success: true,
        data: submissions
      });
    } catch (error) {
      console.error('Error fetching recent submissions:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch recent submissions',
        error: error.message
      });
    }
  }

  // Get submission statistics (admin only)
  static async getStatistics(req, res) {
    try {
      const totalSubmissions = await ContactSubmission.getCount();
      const recentSubmissions = await ContactSubmission.getRecent(5);

      // Get submissions by month for the last 6 months
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

      const monthlyStats = await ContactSubmission.getMonthlyStats(sixMonthsAgo);

      res.json({
        success: true,
        data: {
          total: totalSubmissions,
          recent: recentSubmissions,
          monthlyStats
        }
      });
    } catch (error) {
      console.error('Error fetching submission statistics:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch submission statistics',
        error: error.message
      });
    }
  }
}

module.exports = ContactController;
