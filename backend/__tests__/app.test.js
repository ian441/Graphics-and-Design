const request = require('supertest');
const app = require('../index');

describe('Basic App Tests', () => {
  test('Server should start without errors', () => {
    // This test verifies that the app can be imported without throwing errors
    expect(app).toBeDefined();
  });

  test('GET /api/health should return 200', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ status: 'OK', message: 'Server is running' });
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.status).toBe(404);
  });
});
