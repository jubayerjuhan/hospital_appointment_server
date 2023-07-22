import ErrorHandler from "./errorHandler.js";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const adminChecker = async (req, res, next) => {
  if (!req.headers.authorization)
    return next(new ErrorHandler(403, "Auth Token Not Found"));

  const token = req.headers.authorization.split(" ")[1];

  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decodedToken, "decodedtoken");

  const user = await User.findById(decodedToken._id);
  if (!user) return next(new ErrorHandler(404, "User Not Found"));
  if (user.role !== "admin")
    return next(new ErrorHandler(403, "Permission Not Granted"));

  req.user = user;
  next();
};

export default adminChecker;
