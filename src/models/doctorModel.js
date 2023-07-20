import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String, // You can store the picture as a URL or file path
      required: true,
    },
    specialistIn: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("doctor", doctorSchema);
export default Doctor;
