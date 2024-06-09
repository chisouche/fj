process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app');

let server;

beforeAll((done) => {
  const PORT = 5001; // Use a different port for testing
  server = app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('POST /api/auth/signup', () => {
  it('should create a new user when provided valid data', async () => {
    const response = await request(server)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        password: 'password123',
        email: 'test@example.com'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('_id');
    expect(response.body).toHaveProperty('username', 'testuser');
    expect(response.body).toHaveProperty('email', 'test@example.com');
    expect(response.body).toHaveProperty('token');
  });

  it('should return 400 if any field is missing', async () => {
    const response = await request(server)
      .post('/api/auth/signup')
      .send({
        username: 'testuser'
        // missing password and email
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'All fields are required');
  });

  it('should return 400 if email is invalid', async () => {
    const response = await request(server)
      .post('/api/auth/signup')
      .send({
        username: 'testuser',
        password: 'password123',
        email: 'invalid-email'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid email');
  });
});
