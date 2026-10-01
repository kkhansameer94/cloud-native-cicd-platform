const request = require('supertest');
const app = require('../src/server');

describe('Sanity & Probe Endpoint Tests', () => {
  it('GET / should return 200 and success status', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'success');
  });

  it('GET /healthz should return healthy status for K8s Liveness probe', async () => {
    const res = await request(app).get('/healthz');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('healthy');
  });

  it('GET /ready should return ready status for K8s Readiness probe', async () => {
    const res = await request(app).get('/ready');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('ready');
  });
});
