import express from "express";
import { createDoctor } from "../controllers/productController.js";
import { multerUpload } from "../multer/multerConfig.js";

const router = express.Router();

router.route("/create-doctor").post(multerUpload.single("photo"), createDoctor);

export default router;
