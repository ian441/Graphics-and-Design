const Portfolio = require('../models/Portfolio');

// Get all published portfolio projects
const getAllProjects = async (req, res) => {
  try {
    const { page = 1, limit = 12, category, featured } = req.query;
    const skip = (page - 1) * limit;

    let query = { status: 'published' };

    if (category && category !== 'all') {
      query.category = category;
    }

    if (featured === 'true') {
      query.featured = true;
    }

    const projects = await Portfolio.find(query)
      .sort({ order: 1, createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit))
      .exec();

    const total = await Portfolio.countDocuments(query);

    res.json({
      success: true,
      data: projects.map(project => project.getFormattedData()),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch portfolio projects'
    });
  }
};

// Get single project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Portfolio.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    // If not published and not admin, don't show
    if (project.status !== 'published' && !req.user) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project.getFormattedData()
    });

  } catch (error) {
    console.error('Get project error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid project ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to fetch project'
    });
  }
};

// Get projects by category
const getProjectsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 12 } = req.query;

    const projects = await Portfolio.getByCategory(category, parseInt(limit));

    res.json({
      success: true,
      data: projects.map(project => project.getFormattedData()),
      category,
      total: projects.length
    });

  } catch (error) {
    console.error('Get projects by category error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects by category'
    });
  }
};

// Get featured projects
const getFeaturedProjects = async (req, res) => {
  try {
    const { limit = 6 } = req.query;

    const projects = await Portfolio.getFeatured(parseInt(limit));

    res.json({
      success: true,
      data: projects.map(project => project.getFormattedData()),
      total: projects.length
    });

  } catch (error) {
    console.error('Get featured projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch featured projects'
    });
  }
};

// Create new project (admin only)
const createProject = async (req, res) => {
  try {
    const projectData = req.body;

    // Handle image upload if file was uploaded
    if (req.file) {
      projectData.image = `/uploads/${req.file.filename}`;
    }

    const newProject = new Portfolio(projectData);
    const savedProject = await newProject.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject.getFormattedData()
    });

  } catch (error) {
    console.error('Create project error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create project'
    });
  }
};

// Update project (admin only)
const updateProject = async (req, res) => {
  try {
    const projectData = req.body;

    // Handle image upload if file was uploaded
    if (req.file) {
      projectData.image = `/uploads/${req.file.filename}`;
    }

    const project = await Portfolio.findByIdAndUpdate(
      req.params.id,
      projectData,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      data: project.getFormattedData()
    });

  } catch (error) {
    console.error('Update project error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to update project'
    });
  }
};

// Delete project (admin only)
const deleteProject = async (req, res) => {
  try {
    const project = await Portfolio.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found'
      });
    }

    res.json({
      success: true,
      message: 'Project deleted successfully'
    });

  } catch (error) {
    console.error('Delete project error:', error);
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Invalid project ID'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to delete project'
    });
  }
};

// Get project categories
const getCategories = async (req, res) => {
  try {
    const categories = await Portfolio.aggregate([
      { $match: { status: 'published' } },
      {
        $group: {
          _id: '$category',
          categoryLabel: { $first: '$categoryLabel' },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    // Format categories with id and label
    const formattedCategories = categories.map(cat => ({
      id: cat._id,
      label: cat.categoryLabel,
      count: cat.count
    }));

    // Add 'all' category
    const total = await Portfolio.countDocuments({ status: 'published' });
    formattedCategories.unshift({
      id: 'all',
      label: 'All',
      count: total
    });

    res.json({
      success: true,
      data: formattedCategories
    });

  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch categories'
    });
  }
};

// Get project statistics
const getProjectStats = async (req, res) => {
  try {
    const totalProjects = await Portfolio.countDocuments();
    const publishedProjects = await Portfolio.countDocuments({ status: 'published' });
    const featuredProjects = await Portfolio.countDocuments({ featured: true, status: 'published' });
    
    // Projects by category
    const byCategory = await Portfolio.aggregate([
      {
        $group: {
          _id: '$category',
          categoryLabel: { $first: '$categoryLabel' },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        total: totalProjects,
        published: publishedProjects,
        featured: featuredProjects,
        byCategory
      }
    });

  } catch (error) {
    console.error('Get project stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch project statistics'
    });
  }
};

module.exports = {
  getAllProjects,
  getProjectById,
  getProjectsByCategory,
  getFeaturedProjects,
  createProject,
  updateProject,
  deleteProject,
  getCategories,
  getProjectStats
};
