import ErrorHandler from "../middlewares/errorHandler.js";
import Doctor from "../models/doctorModel.js";

// this function add products
export const createDoctor = async (req, res, next) => {
  if (!req.file) return next(new ErrorHandler(404, "Doctor Image Not Found"));
  try {
    const doctor = await Doctor.create({
      ...req.body,
      picture: req.file.filename,
    });
    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

// get doctor by id
export const getDoctorById = async (req, res, next) => {
  const doctorId = req.params.id;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return next(new ErrorHandler(404, "Doctor not found"));
    }
    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    next(error);
  }
};

// edit doctor
export const editDoctor = async (req, res, next) => {
  const doctorId = req.params.id;
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      doctorId,
      { ...req.body },
      { new: true }
    );
    if (!updatedDoctor) {
      return next(new ErrorHandler(404, "Doctor not found"));
    }
    res.status(200).json({
      success: true,
      doctor: updatedDoctor,
    });
  } catch (error) {
    next(error);
  }
};

// delete doctor
export const deleteDoctor = async (req, res, next) => {
  const doctorId = req.params.id;
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
    if (!deletedDoctor) {
      return next(new ErrorHandler(404, "Doctor not found"));
    }
    res.status(200).json({
      success: true,
      message: "Doctor Deleted",
      doctor: deletedDoctor,
    });
  } catch (error) {
    next(error);
  }
};
