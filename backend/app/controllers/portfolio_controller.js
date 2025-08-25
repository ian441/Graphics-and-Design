const { PortfolioProject, PortfolioCategory } = require('../models');

class PortfolioController {
  // Get all projects with optional filtering
  static async getProjects(req, res) {
    try {
      const { category, featured, page = 1, limit = 12 } = req.query;
      
      const filters = {};
      if (category && category !== 'all') {
        filters.category = category;
      }
      if (featured) {
        filters.featured = featured === 'true';
      }

      // Calculate pagination
      const offset = (page - 1) * limit;
      filters.limit = parseInt(limit);
      filters.offset = offset;

      const projects = await PortfolioProject.findAll(filters);
      const totalProjects = await PortfolioController.getProjectCount(filters);

      res.json({
        success: true,
        data: projects,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: totalProjects,
          pages: Math.ceil(totalProjects / limit)
        }
      });
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch projects',
        error: error.message
      });
    }
  }

  // Get project by ID
  static async getProjectById(req, res) {
    try {
      const { id } = req.params;
      const project = await PortfolioProject.findById(id);

      if (!project) {
        return res.status(404).json({
          success: false,
          message: 'Project not found'
        });
      }

      res.json({
        success: true,
        data: project
      });
    } catch (error) {
      console.error('Error fetching project:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch project',
        error: error.message
      });
    }
  }

  // Get all categories
  static async getCategories(req, res) {
    try {
      const categories = await PortfolioCategory.findAll();
      
      res.json({
        success: true,
        data: categories
      });
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch categories',
        error: error.message
      });
    }
  }

  // Get featured projects
  static async getFeaturedProjects(req, res) {
    try {
      const { limit = 6 } = req.query;
      const projects = await PortfolioProject.getFeatured(parseInt(limit));

      res.json({
        success: true,
        data: projects
      });
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch featured projects',
        error: error.message
      });
    }
  }

  // Get projects by category
  static async getProjectsByCategory(req, res) {
    try {
      const { category } = req.params;
      const { limit = 12 } = req.query;
      
      const projects = await PortfolioProject.getByCategory(category, parseInt(limit));

      res.json({
        success: true,
        data: projects
      });
    } catch (error) {
      console.error('Error fetching projects by category:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch projects by category',
        error: error.message
      });
    }
  }

  // Create new project (admin only)
  static async createProject(req, res) {
    try {
      const projectData = req.body;
      const project = await PortfolioProject.create(projectData);

      res.status(201).json({
        success: true,
        message: 'Project created successfully',
        data: project
      });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to create project',
        error: error.message
      });
    }
  }

  // Update project (admin only)
  static async updateProject(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      const project = await PortfolioProject.findById(id);
      if (!project) {
        return res.status(404).json({
          success: false,
          message: 'Project not found'
        });
      }

      const updatedProject = await project.update(updateData);

      res.json({
        success: true,
        message: 'Project updated successfully',
        data: updatedProject
      });
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update project',
        error: error.message
      });
    }
  }

  // Delete project (admin only)
  static async deleteProject(req, res) {
    try {
      const { id } = req.params;

      const project = await PortfolioProject.findById(id);
      if (!project) {
        return res.status(404).json({
          success: false,
          message: 'Project not found'
        });
      }

      await project.delete();

      res.json({
        success: true,
        message: 'Project deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to delete project',
        error: error.message
      });
    }
  }

  // Helper method to get project count
  static async getProjectCount(filters = {}) {
    let query = 'SELECT COUNT(*) FROM portfolio_projects WHERE 1=1';
    const values = [];
    let paramCount = 1;

    if (filters.category && filters.category !== 'all') {
      query += ` AND category = $${paramCount}`;
      values.push(filters.category);
      paramCount++;
    }

    if (filters.featured) {
      query += ` AND featured = $${paramCount}`;
      values.push(filters.featured);
      paramCount++;
    }

    try {
      const result = await pool.query(query, values);
      return parseInt(result.rows[0].count);
    } catch (error) {
      throw new Error(`Error counting projects: ${error.message}`);
    }
  }
}

module.exports = PortfolioController;
