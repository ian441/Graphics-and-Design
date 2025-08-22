const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['branding', 'web-design', 'digital-marketing', 'print-design'],
    lowercase: true
  },
  categoryLabel: {
    type: String,
    required: [true, 'Category label is required'],
    trim: true
  },
  client: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true,
    maxlength: [200, 'Client name cannot exceed 200 characters']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  challenge: {
    type: String,
    required: [true, 'Challenge description is required'],
    trim: true,
    maxlength: [1000, 'Challenge cannot exceed 1000 characters']
  },
  solution: {
    type: String,
    required: [true, 'Solution description is required'],
    trim: true,
    maxlength: [1000, 'Solution cannot exceed 1000 characters']
  },
  results: {
    type: String,
    required: [true, 'Results description is required'],
    trim: true,
    maxlength: [1000, 'Results cannot exceed 1000 characters']
  },
  process: [{
    type: String,
    trim: true,
    maxlength: [200, 'Process step cannot exceed 200 characters']
  }],
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  order: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  projectUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  caseStudy: {
    type: String,
    trim: true,
    maxlength: [5000, 'Case study cannot exceed 5000 characters']
  }
}, {
  timestamps: true
});

// Indexes for better query performance
portfolioSchema.index({ category: 1, status: 1 });
portfolioSchema.index({ featured: 1, status: 1 });
portfolioSchema.index({ status: 1 });
portfolioSchema.index({ order: 1 });

// Virtual for URL slug (could be used for SEO-friendly URLs)
portfolioSchema.virtual('slug').get(function() {
  return this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
});

// Static method to get projects by category
portfolioSchema.statics.getByCategory = function(category, limit = 12) {
  return this.find({ 
    category: category.toLowerCase(), 
    status: 'published' 
  })
  .sort({ order: 1, createdAt: -1 })
  .limit(limit)
  .exec();
};

// Static method to get featured projects
portfolioSchema.statics.getFeatured = function(limit = 6) {
  return this.find({ 
    featured: true, 
    status: 'published' 
  })
  .sort({ order: 1, createdAt: -1 })
  .limit(limit)
  .exec();
};

// Static method to get all published projects with pagination
portfolioSchema.statics.getPublished = function(page = 1, limit = 12) {
  const skip = (page - 1) * limit;
  return this.find({ status: 'published' })
    .sort({ order: 1, createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .exec();
};

// Method to get formatted project data
portfolioSchema.methods.getFormattedData = function() {
  return {
    id: this._id,
    title: this.title,
    category: this.category,
    categoryLabel: this.categoryLabel,
    client: this.client,
    duration: this.duration,
    image: this.image,
    description: this.description,
    challenge: this.challenge,
    solution: this.solution,
    results: this.results,
    process: this.process,
    featured: this.featured,
    status: this.status,
    order: this.order,
    tags: this.tags,
    technologies: this.technologies,
    projectUrl: this.projectUrl,
    githubUrl: this.githubUrl,
    caseStudy: this.caseStudy,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    slug: this.slug
  };
};

module.exports = mongoose.model('Portfolio', portfolioSchema);
