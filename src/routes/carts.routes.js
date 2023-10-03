import { Router } from "express";
import { CartsController } from "../controllers/carts.controller.js";

const router = Router();
router.get("/", CartsController.getCarts);
router.post("/", CartsController.createCart);
router.get("/:cid", (req, res) => {});
router.post("/:cid/product/:pid", CartsController.addProductToCart);

export { router as cartsRouter };
