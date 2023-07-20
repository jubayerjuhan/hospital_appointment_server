import express from "express";
import {
  createDoctor,
  deleteDoctor,
  editDoctor,
  getDoctorById,
} from "../controllers/doctorController.js";
import { multerUpload } from "../multer/multerConfig.js";

const router = express.Router();

router
  .route("/create-doctor")
  .post(multerUpload.single("picture"), createDoctor);
router.route("/get-doctor/:id").get(getDoctorById);
router.route("/edit-doctor/:id").put(editDoctor);
router.route("/delete-doctor/:id").delete(deleteDoctor);

export default router;
