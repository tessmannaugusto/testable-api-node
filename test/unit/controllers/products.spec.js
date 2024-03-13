import ProductsController from '../../../src/controllers/products'
import sinon from 'sinon';

describe('Controllers: Products', () => {
  const defaultProduct = [{
    name: 'Default product',
    description: 'product description',
    price: 100
  }]
  describe('get() products', () => {
    it('should return list of products', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      }
      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).toBeTruthy();
      expect(response.send.calledWith(defaultProduct)).toBeTruthy()
    })
  })
})