const request = require('supertest');
const app = require('./app');

describe('GET /health', () => {
  it('returns status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
    expect(res.body.timestamp).toBeDefined();
  });
});

describe('GET /api/products', () => {
  it('returns an empty products array', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toBe(200);
    expect(res.body.products).toEqual([]);
  });
});
