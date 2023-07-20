import express from "express";
import {
  createAppointment,
  getAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.route("/create-appointment").post(createAppointment);
router.route("/get-appointment/:id").get(getAppointment);

export default router;
