# Creative Studio Backend API

A comprehensive backend API for the Creative Studio portfolio website, built with Node.js, Express, and MongoDB.

## Features

- **Contact Form Management**: Handle contact form submissions with email notifications
- **Portfolio Management**: CRUD operations for portfolio projects with image upload
- **Authentication**: JWT-based authentication system with role-based access control
- **Email Service**: Automatic email notifications for contact form submissions
- **File Upload**: Support for image uploads with validation
- **RESTful API**: Clean, well-structured REST API endpoints

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   - Copy `.env` file and update with your actual values
   - Set up MongoDB connection string
   - Configure email service (Gmail recommended)

4. **Database Setup**
   - Make sure MongoDB is running
   - The database will be created automatically on first connection

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/creative-studio
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@creativestudio.com
JWT_SECRET=your-super-secret-jwt-key-here
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/png,image/gif,image/webp
```

## API Endpoints

### Contact Routes
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin/editor)
- `GET /api/contact/stats` - Get contact statistics (admin/editor)
- `GET /api/contact/:id` - Get specific contact (admin/editor)
- `PATCH /api/contact/:id/status` - Update contact status (admin/editor)
- `DELETE /api/contact/:id` - Delete contact (admin)

### Portfolio Routes
- `GET /api/portfolio` - Get all published projects
- `GET /api/portfolio/categories` - Get project categories
- `GET /api/portfolio/featured` - Get featured projects
- `GET /api/portfolio/category/:category` - Get projects by category
- `GET /api/portfolio/:id` - Get specific project
- `POST /api/portfolio` - Create project (admin/editor)
- `PUT /api/portfolio/:id` - Update project (admin/editor)
- `DELETE /api/portfolio/:id` - Delete project (admin)
- `GET /api/portfolio/admin/stats` - Get project statistics (admin)

### Auth Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change password
- `GET /api/auth/users` - Get all users (admin)
- `PUT /api/auth/users/:id` - Update user (admin)

## Database Models

### Contact
- Stores contact form submissions
- Includes validation and status tracking

### Portfolio
- Manages portfolio projects
- Supports categories, featured projects, and ordering

### User
- User authentication and authorization
- Role-based access control (admin, editor, viewer)

## Email Configuration

To set up email notifications:

1. **Gmail Setup**:
   - Use a Gmail account
   - Enable 2-factor authentication
   - Generate an App Password
   - Set `EMAIL_USER` and `EMAIL_PASS` in `.env`

2. **Other Email Services**:
   - Update the transporter configuration in `utils/emailService.js`
   - Adjust service and authentication settings

## File Uploads

- Images are uploaded to the `uploads/` directory
- Supported formats: JPEG, PNG, GIF, WebP
- Maximum file size: 5MB
- Files are automatically renamed to prevent conflicts

## Authentication

- JWT-based authentication
- Token expires in 7 days
- Role-based access control:
  - **Admin**: Full access to all features
  - **Editor**: Can manage portfolio and contacts
  - **Viewer**: Read-only access

## Development

- Uses nodemon for automatic restart in development
- MongoDB connection with error handling
- Comprehensive error logging
- CORS enabled for frontend integration

## Production Deployment

1. Set `NODE_ENV=production`
2. Update MongoDB connection string for production
3. Configure proper email service credentials
4. Set strong JWT secret
5. Use process manager (PM2) for production

## Troubleshooting

1. **MongoDB Connection Issues**:
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **Email Not Sending**:
   - Verify email service credentials
   - Check if App Password is correct for Gmail

3. **File Upload Issues**:
   - Ensure `uploads/` directory exists
   - Check file size and type restrictions

## License

ISC License - feel free to use this project for your portfolio website.
