const request = require('supertest');
const app = require('../index');

describe('Portfolio API Tests', () => {
  test('GET /api/portfolio should return 200 and array of projects', async () => {
    const response = await request(app).get('/api/portfolio');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/portfolio/categories should return 200 and array of categories', async () => {
    const response = await request(app).get('/api/portfolio/categories');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /api/portfolio/:id should return 404 for non-existent project', async () => {
    const response = await request(app).get('/api/portfolio/9999');
    
    expect(response.status).toBe(404);
  });

  test('GET /api/portfolio should support query parameters', async () => {
    const response = await request(app).get('/api/portfolio?category=web');
    
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
