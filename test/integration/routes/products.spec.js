import supertest from 'supertest';
import app from '../../../src/app';

const request = supertest(app);


describe('Routes: Products', () => {
  const defaultProduct = {
    name: 'Default project',
    description: 'product description',
    price: 100
  }

  describe('GET /products', () => {
    it('should return a list of products', async () => {
      const response = await request.get('/products');
      expect(response.body[0]).toEqual(defaultProduct)
    })
  })
})