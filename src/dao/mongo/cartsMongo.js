import { cartsModel } from "../models/carts.model.js";

export class CartsMongo {
  constructor() {
    this.model = cartsModel;
  }

  async getAll() {
    try {
      const carts = await this.model.find();
      return carts;
    } catch (error) {
      throw error;
    }
  }

  async getById(cartId) {
    try {
      const cart = await this.model.findById(cartId);
      if (!cart) {
        throw new error("error al obtebner el carrito");
      }
      return cart;
    } catch (error) {
      console.log(error.message);
      throw new error("error al obtebner el carrito");
    }
  }

  async save(cart) {
    try {
      const cartCreated = await this.model.create(cart);
      return cartCreated;
    } catch (error) {
      throw error;
    }
  }

  async addCart(products) {
    try {
      let cartData = [];
      if (products & (products.lenght > 0)) {
        cartData.products = products;
      }
      const cart = await this.model.crate(cartData);
      return cart;
    } catch (error) {
      console.log(error.message);
    }
  }
}
