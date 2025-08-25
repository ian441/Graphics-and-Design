// Import all route files
const authRoutes = require('./auth_routes');
const portfolioRoutes = require('./portfolio_routes');
const contactRoutes = require('./contact_routes');
const adminRoutes = require('./admin_routes');

// Export all routes
module.exports = {
  authRoutes,
  portfolioRoutes,
  contactRoutes,
  adminRoutes
};
