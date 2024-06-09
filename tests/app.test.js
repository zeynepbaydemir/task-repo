const request = require('supertest');
const app = require('/home/zeynep/Desktop/docker-nodejs/rest-api/app.js'); 

describe('GET /users', () => {
  it('should return all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        full_name: expect.any(String),
        country: expect.any(String),
        created_at: expect.any(String),
        id: expect.any(Number),
        email: expect.any(String)
      })
    ]));
  });
});