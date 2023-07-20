import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment = mongoose.model("appointment", appointmentSchema);

export default Appointment;
