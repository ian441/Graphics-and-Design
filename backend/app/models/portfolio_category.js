const { pool } = require('../../db');

class PortfolioCategory {
  constructor({ id, name, description, created_at }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
  }

  // Create a new category
  static async create(categoryData) {
    const { name, description } = categoryData;

    const query = `
      INSERT INTO portfolio_categories (name, description)
      VALUES ($1, $2)
      RETURNING *
    `;

    try {
      const result = await pool.query(query, [name, description]);
      return new PortfolioCategory(result.rows[0]);
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  // Get all categories
  static async findAll() {
    const query = 'SELECT * FROM portfolio_categories ORDER BY name';
    
    try {
      const result = await pool.query(query);
      return result.rows.map(row => new PortfolioCategory(row));
    } catch (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }
  }

  // Get category by ID
  static async findById(id) {
    const query = 'SELECT * FROM portfolio_categories WHERE id = $1';
    
    try {
      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) {
        return null;
      }
      return new PortfolioCategory(result.rows[0]);
    } catch (error) {
      throw new Error(`Error fetching category: ${error.message}`);
    }
  }

  // Get category by name
  static async findByName(name) {
    const query = 'SELECT * FROM portfolio_categories WHERE name = $1';
    
    try {
      const result = await pool.query(query, [name]);
      if (result.rows.length === 0) {
        return null;
      }
      return new PortfolioCategory(result.rows[0]);
    } catch (error) {
      throw new Error(`Error fetching category: ${error.message}`);
    }
  }

  // Update category
  async update(updateData) {
    const fields = [];
    const values = [];
    let paramCount = 1;

    Object.keys(updateData).forEach(key => {
      if (updateData[key] !== undefined) {
        fields.push(`${key} = $${paramCount}`);
        values.push(updateData[key]);
        paramCount++;
      }
    });

    if (fields.length === 0) {
      return this;
    }

    values.push(this.id);
    const query = `
      UPDATE portfolio_categories 
      SET ${fields.join(', ')}
      WHERE id = $${paramCount}
      RETURNING *
    `;

    try {
      const result = await pool.query(query, values);
      return new PortfolioCategory(result.rows[0]);
    } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  }

  // Delete category
  async delete() {
    const query = 'DELETE FROM portfolio_categories WHERE id = $1';
    
    try {
      await pool.query(query, [this.id]);
      return true;
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }

  // Get projects in this category
  async getProjects(limit = 12) {
    const query = 'SELECT * FROM portfolio_projects WHERE category = $1 LIMIT $2';
    
    try {
      const result = await pool.query(query, [this.name, limit]);
      return result.rows.map(row => new PortfolioProject(row));
    } catch (error) {
      throw new Error(`Error fetching projects for category: ${error.message}`);
    }
  }

  // Get project count in this category
  async getProjectCount() {
    const query = 'SELECT COUNT(*) FROM portfolio_projects WHERE category = $1';
    
    try {
      const result = await pool.query(query, [this.name]);
      return parseInt(result.rows[0].count);
    } catch (error) {
      throw new Error(`Error counting projects: ${error.message}`);
    }
  }
}

module.exports = PortfolioCategory;
