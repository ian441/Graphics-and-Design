const { Pool } = require('pg');
require('dotenv').config();

// Create a new PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER || 'ayro5',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'portfolio_db',
  password: process.env.DB_PASSWORD || '4the9t',
  port: process.env.DB_PORT || 5432,
});

// Test the database connection
pool.on('connect', () => {
  console.log('Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('Database connection error:', err);
  process.exit(-1);
});

// Create tables if they don't exist
const createTables = async () => {
  try {
    // Create portfolio_projects table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS portfolio_projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        client VARCHAR(255),
        category VARCHAR(100),
        image VARCHAR(500),
        description TEXT,
        challenge TEXT,
        solution TEXT,
        results TEXT,
        process TEXT[],
        duration VARCHAR(100),
        featured BOOLEAN DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create contact_submissions table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create portfolio_categories table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS portfolio_categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        description TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create users table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

// Insert sample data
const insertSampleData = async () => {
  try {
    // Insert sample categories
    await pool.query(`
      INSERT INTO portfolio_categories (name, description) VALUES
      ('web', 'Web Development Projects'),
      ('mobile', 'Mobile App Development'),
      ('design', 'UI/UX Design Projects'),
      ('ecommerce', 'E-commerce Solutions')
      ON CONFLICT (name) DO NOTHING
    `);

    // Insert sample projects
    await pool.query(`
      INSERT INTO portfolio_projects (title, client, category, image, description, challenge, solution, results, process, duration, featured) VALUES
      ('E-commerce Website', 'TechCorp Solutions', 'web', '/images/project1.jpg', 'A modern e-commerce platform with React and Node.js', 'Building a scalable e-commerce platform that could handle high traffic', 'Implemented microservices architecture with React frontend and Node.js backend', 'Increased sales by 150% and improved user engagement by 200%', ARRAY['Discovery & Planning', 'Design & Prototyping', 'Development & Testing', 'Launch & Optimization'], '6 months', true),
      ('Mobile Banking App', 'SecureBank Ltd', 'mobile', '/images/project2.jpg', 'Secure mobile banking application for iOS and Android', 'Creating a secure and user-friendly mobile banking experience', 'Developed cross-platform app with biometric authentication and real-time notifications', 'Achieved 98% user satisfaction rate and 40% increase in mobile banking adoption', ARRAY['Security Audit', 'UI/UX Design', 'Development', 'Security Testing', 'App Store Launch'], '8 months', true),
      ('Portfolio Website', 'CreativeStudio Pro', 'design', '/images/project3.jpg', 'Responsive portfolio website design', 'Showcasing creative work in an engaging and professional manner', 'Created modern, responsive design with smooth animations and optimal performance', 'Improved client acquisition by 60% and enhanced brand visibility', ARRAY['Brand Analysis', 'Design Concept', 'Development', 'Content Integration'], '3 months', false),
      ('Online Store', 'FashionHub Inc', 'ecommerce', '/images/project4.jpg', 'Complete e-commerce solution with payment integration', 'Building a comprehensive online shopping platform', 'Integrated multiple payment gateways and inventory management system', 'Processed over $2M in transactions within first year', ARRAY['Market Research', 'Platform Design', 'Payment Integration', 'Testing & Launch'], '5 months', true)
      ON CONFLICT DO NOTHING
    `);

    console.log('Sample data inserted successfully');
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
};

module.exports = {
  pool,
  createTables,
  insertSampleData
};
