# Portfolio Backend API

A Node.js Express backend with PostgreSQL database for the portfolio application.

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
```

2. Set up PostgreSQL database:
   - Install PostgreSQL on your system
   - Create a database named `portfolio_db`
   - Update the `.env` file with your database credentials

3. Update `.env` file with your database configuration:
```
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=portfolio_db
DB_PASSWORD=your_postgres_password
DB_PORT=5432
PORT=5000
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Or start the production server:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/portfolio` - Get all portfolio projects
- `GET /api/portfolio/:id` - Get specific project by ID
- `GET /api/portfolio/categories` - Get all portfolio categories

## Database Schema

### portfolio_projects
- id (SERIAL PRIMARY KEY)
- title (VARCHAR)
- description (TEXT)
- category (VARCHAR)
- image_url (VARCHAR)
- project_url (VARCHAR)
- github_url (VARCHAR)
- technologies (TEXT[])
- featured (BOOLEAN)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### contact_submissions
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- email (VARCHAR)
- company (VARCHAR)
- message (TEXT)
- created_at (TIMESTAMP)

### portfolio_categories
- id (SERIAL PRIMARY KEY)
- name (VARCHAR)
- description (TEXT)
- created_at (TIMESTAMP)

## Environment Variables

- `DB_USER` - PostgreSQL username
- `DB_HOST` - PostgreSQL host (default: localhost)
- `DB_NAME` - Database name (default: portfolio_db)
- `DB_PASSWORD` - PostgreSQL password
- `DB_PORT` - PostgreSQL port (default: 5432)
- `PORT` - Server port (default: 5000)
