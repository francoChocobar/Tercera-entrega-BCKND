import { productsDao } from "../dao";

export class ProductsService {
  static getProducts = async () => {
    return await productsDao.get();
  };

  static getProduct = async (productId) => {
    return await productsDao.getById(productId);
  };

  static createProduct = async () => {
    return await productsDao.save(productInfo);
  };
}
