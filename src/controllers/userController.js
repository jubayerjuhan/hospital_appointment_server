import ErrorHandler from "../middlewares/errorHandler.js";
import User from "../models/userModel.js";
import { sendJWTToken } from "../utils/sendJwtToken.js";

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return next(new ErrorHandler(404, "Email Or Password Not Found"));

    //searching for user with the email on Db
    const user = await User.findOne({ email }).select("+password");

    //throwing a error if there is no user with that email
    if (!user) return next(new ErrorHandler(404, "User Not Found"));

    // comparing the password
    const passwordMatched = await user.comparePassword(password, user.password);
    if (!passwordMatched)
      return next(new ErrorHandler(403, "Password Didn't Matched"));

    user.password = undefined;
    sendJWTToken(res, user);
  } catch (error) {
    next(error);
  }
};
