import mongoose from "mongoose";

export const connectDatabase = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/shopping");
    console.log("Database Connected With Backend");
  } catch (error) {
    console.log("Database Connection Failed");
  }
};
