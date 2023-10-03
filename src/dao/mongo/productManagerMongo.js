import { productsModel } from "../models/products.model.js";


export class ProductManagerMongo {
  constructor() {
   this.model = productsModel;
  };

  async get() {
    try {
        const products = await this.model.find().lean();
        return products;  
    } catch (error) {
      throw error;
    }
  }


  async getWithPaginate(query,options){
    try {
        const result = await this.model.paginate(query, options);
        return result;
    } catch (error) {
        throw error;
    }
  }


  async getById(id){

    try {
      const product = await this.model.findById(id);
      return product;
    } catch (error) {
      console.log(error.message);
      throw new error("error al obtener el producto")
    }
  };

  async save(productInfo) {
    try {
        const productCreated = await this.model.create(productInfo);
        return(productCreated);
    } catch (error) {
      throw new error("error en la creacion del producto");
    }
  };
}
