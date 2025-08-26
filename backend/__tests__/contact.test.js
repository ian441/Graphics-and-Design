const request = require('supertest');
const app = require('../index');

describe('Contact API Tests', () => {
  test('POST /api/contact should return 201 for valid contact submission', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'Test Company',
      message: 'This is a test message'
    };

    const response = await request(app)
      .post('/api/contact')
      .send(contactData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('message', 'Contact submission received');
    expect(response.body).toHaveProperty('submission');
  });

  test('POST /api/contact should return 400 for invalid email', async () => {
    const contactData = {
      name: 'John Doe',
      email: 'invalid-email',
      company: 'Test Company',
      message: 'This is a test message'
    };

    const response = await request(app)
      .post('/api/contact')
      .send(contactData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
  });

  test('POST /api/contact should return 400 for missing required fields', async () => {
    const contactData = {
      name: 'John Doe',
      // email is missing
      company: 'Test Company',
      message: 'This is a test message'
    };

    const response = await request(app)
      .post('/api/contact')
      .send(contactData)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
  });
});
