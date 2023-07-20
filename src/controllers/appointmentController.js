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
