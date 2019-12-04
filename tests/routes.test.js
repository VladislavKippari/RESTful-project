const request = require('supertest')
const app = require('../server')
describe('Post Endpoints', () => {
  it('should create a new city', async () => {
    const res = await request(app)
      .post('/api/world/country/city/add')
      .send({
        id: 5000,
        name: 'test',
        countryCode: 'EST',
        district: 'testing',
        population: '54643135'
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
  });

  it('should fetch all cities', async () => {
    const res = await request(app).get('/api/world/country/city/all');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('city');
    expect(res.body.name).toHaveLength(1);
  });
})