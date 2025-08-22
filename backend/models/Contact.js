const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters']
  },
  projectType: {
    type: String,
    enum: ['', 'branding', 'web-design', 'digital-marketing', 'print-design', 'consultation', 'other'],
    default: ''
  },
  budget: {
    type: String,
    enum: ['', 'under-5k', '5k-10k', '10k-25k', '25k-50k', '50k-plus', 'discuss'],
    default: ''
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters']
  },
  status: {
    type: String,
    enum: ['new', 'reviewed', 'contacted', 'archived'],
    default: 'new'
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1 });
contactSchema.index({ createdAt: -1 });

// Virtual for formatted project type
contactSchema.virtual('formattedProjectType').get(function() {
  const projectTypes = {
    '': 'Not specified',
    'branding': 'Brand Identity & Logo Design',
    'web-design': 'Website Design & Development',
    'digital-marketing': 'Digital Marketing Campaign',
    'print-design': 'Print Design & Materials',
    'consultation': 'Design Consultation',
    'other': 'Other'
  };
  return projectTypes[this.projectType];
});

// Virtual for formatted budget
contactSchema.virtual('formattedBudget').get(function() {
  const budgets = {
    '': 'Not specified',
    'under-5k': 'Under $5,000',
    '5k-10k': '$5,000 - $10,000',
    '10k-25k': '$10,000 - $25,000',
    '25k-50k': '$25,000 - $50,000',
    '50k-plus': '$50,000+',
    'discuss': "Let's Discuss"
  };
  return budgets[this.budget];
});

// Method to get formatted contact data
contactSchema.methods.getFormattedData = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    company: this.company,
    projectType: this.formattedProjectType,
    budget: this.formattedBudget,
    message: this.message,
    status: this.status,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

module.exports = mongoose.model('Contact', contactSchema);
