import express from "express";
import { createProduct } from "../controllers/productController.js";
import { multerUpload } from "../multer/multerConfig.js";

const router = express.Router();

router
  .route("/create-product")
  .post(multerUpload.single("photo"), createProduct);

export default router;
