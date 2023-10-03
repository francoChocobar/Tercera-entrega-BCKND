import { CartsService } from "../services/carts.service";
import { ProductsService } from "../services/products.service";

export class CartsController {
  static createCart = async (req, res) => {
    try {
      const newCart = {};
      const cartCreated = await CartsService.createCart(newCart);
      res.json({ status: "succes", data: cartCreated });
    } catch (error) {
      console.log(error.message);
      res.json({ status: "error", message: "error al obtener los carritos" });
    }
  };

  static getCarts = async (req, res) => {
    try {
      const newCart = {};
      const cartCreated = await CartsService.getCarts();
      res.json({ status: "succes", data: carts });
    } catch (error) {
      console.log(error.message);
      res.json({ status: "error", message: "error al obtener el listado" });
    }
  };

  static addProductToCart = async (req, res) => {
    try {
      const cartId = req.params.cid;
      const productId = req.params.pid;
      const cart = await CartsService.getCart(cartId);
      const product = await ProductsService.getProduct();
      res.json({ status: "success", data: cartCreated });
    } catch (error) {
      res.json({ status: "error", message: error.message });
    }
  };
}
