import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  startFrom: {
    type: Date,
    required: true,
  },
  endTo: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

export default Appointment;
