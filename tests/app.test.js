const request = require('supertest');
const app = require('../src/app');

describe('API tests', () => {
    test('GET /health should return ok', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });

    test('GET /hello should return greeting', async () => {
        const res = await request(app).get('/hello');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Hello CI/CD!');
    });
});
