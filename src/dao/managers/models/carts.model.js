import mongoose from "mongoose";
import { cartsCollection } from "../../constants/index.js";

const cartsCollection = "carts";
const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        quantity: {
          type: Number,
          default: 1,
        },
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "products",
        },
      },
    ],
    default: [],
  },
});

export const cartsModel = mongoose.model(cartsCollection, cartSchema);
