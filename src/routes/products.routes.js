import { Router } from "express";

import { productsController } from "../controllers/products.controller.js";
import { checkUserAuthenticated } from "../middlewares/auth.js";
import { checkRole } from "../middlewares/auth.js";

const validateFields = (req, res, next) => {
  const productInfo = req.body;
  if (!productInfo.tittle || !productInfo.price) {
    return res.json({ status: "error", message: "campos incompletos" });
  } else {
    next();
  }
};

const router = Router();

router.get("/", productsController.getProducts);
router.get("/:pid", productsController.getProduct);
router.post("/", checkUserAuthenticated, checkRole(["admin"]), productsController.createProduct);

router.put("/:pid", checkUserAuthenticated, checkRole(["admin"]), productsController.updateProduct);

router.delete("/:pid", checkUserAuthenticated, checkRole(["admin"]), productsController.deleteProduct);

export { router as productsRouter };
