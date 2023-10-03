import { cartsDao, productsDao } from "../dao";

export class CartsService {
  static getCarts = async () => {
    return await cartsDao.getAll();
  };

  static getCart = async (cartId) => {
    return await cartsDao.getById(cartId);
  };

  static createCart = async (cartInfo) => {
    return await cartsDao.save(cartInfo);
  };
  static addToCart = async (products) => {
    return await cartsDao.addToCart(products);
  };
}
