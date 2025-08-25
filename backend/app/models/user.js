const { pool } = require('../../db');

class User {
  constructor({ id, email, password, created_at }) {
    this.id = id;
    this.email = email;
    this.password = password; // Store hashed password
    this.created_at = created_at;
  }

  // Create a new user
  static async create(userData) {
    const { email, password } = userData;

    const query = `
      INSERT INTO users (email, password)
      VALUES ($1, $2)
      RETURNING *
    `;

    try {
      const result = await pool.query(query, [email, password]);
      return new User(result.rows[0]);
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  // Find user by email
  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    
    try {
      const result = await pool.query(query, [email]);
      if (result.rows.length === 0) {
        return null;
      }
      return new User(result.rows[0]);
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  // Find user by ID
  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null;
      }
      return new User(result.rows[0]);
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }

  // Verify password (placeholder for actual password verification logic)
  async verifyPassword(password) {
    // Implement password verification logic (e.g., using bcrypt)
    return this.password === password; // Placeholder comparison
  }
}

module.exports = User;
