import express from "express";
import {
  createAppointment,
  getAppointment,
  editAppointment,
  deleteAppointment,
  getAllAppointments,
  getUserAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.route("/create-appointment").post(createAppointment);
router.route("/get-appointment/:id").get(getAppointment);
router.route("/edit-appointment/:id").put(editAppointment);
router.route("/delete-appointment/:id").delete(deleteAppointment);
router.route("/get-all-appointments").get(getAllAppointments);
router.route("/get-user-appointments/:id").get(getUserAppointment);

export default router;
