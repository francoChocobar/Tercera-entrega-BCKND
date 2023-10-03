import { productsService } from "../services/products.service";

export class productsController {
  static getProducts = async (req, res) => {
    try {
      const limit = req.query.limit;
      const products = productsService.getProducts();
      if (limit) {
      } else {
        res.json({ status: "succes", data: products });
      }
    } catch (error) {
      res.json({ status: "error", message: error.message });
    }
  };
  static getProduct = async (req, res) => {};
  static createProduct = async (req, res) => {
    try {
      const productInfo = req.body;
      const productCreated = productsService.createProduct(productInfo);
      res.json({
        status: "succes",
        data: productCreated,
        message: "producto creado de manera exitosa",
      });
    } catch (error) {
      res.json({ status: "error", message: error.message });
    }
  };
  static updateProduct = (req, res) => {
    const productInfo = req.body;
  };
  static deleteProduct = async (req, res) => {};
}
