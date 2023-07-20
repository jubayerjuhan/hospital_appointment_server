import Appointment from "../models/appointmentModel.js";

export const createAppointment = async (req, res, next) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const getAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id).populate(
      "doctor patient",
      "name username"
    );
    res.status(200).json({
      success: true,
      appointment,
    });
  } catch (error) {
    next(error);
  }
};

export const editAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!updatedAppointment) {
      return next(new ErrorHandler(404, "Appointment not found"));
    }
    res.status(200).json({
      success: true,
      appointment: updatedAppointment,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return next(new ErrorHandler(404, "Appointment not found"));
    }
    res.status(200).json({
      success: true,
      message: "Appointment Deleted",
      appointment: deletedAppointment,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().populate(
      "doctor patient",
      "name username"
    );
    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserAppointment = async (req, res, next) => {
  const patientId = req.params.id;
  try {
    const appointments = await Appointment.find({
      patient: patientId,
    }).populate("doctor patient", "name username");
    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};
