import { __dirname } from "../../utils.js";
import path from "path";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

export class ProductManager {
  constructor(fileName) {
    this.path = path.join(__dirname, `/files/${fileName}`);
  }

  fileExists() {
    return fs.existsSync(this.path);
  }
  async get() {
    try {
      if (this.fileExists()) {
        const content = await fs.promises.readFile(this.path, "utf-8");
        const products = JSON.parse(content);
        return products;
      } else {
        throw new Error("No se puede obtener los productos");
      }
    } catch (error) {
      throw error;
    }
  }

  async save(product) {
    try {
      if (this.fileExists()) {
        const content = await fs.promises.readFile(this.path, "utf-8");
        const products = JSON.parse(content);
        let newId = uuidv4();
        const newProduct = {
          id: newId,
          ...product,
        };
        products.push(newProduct);
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(products, null, "\t")
        );

        return newProduct;
      } else {
        throw new Error("error");
      }
    } catch (error) {
      throw error;
    }
  }
}
