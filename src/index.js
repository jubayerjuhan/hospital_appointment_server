import express from "express";
import path from "path";
import "dotenv/config";
import { connectDatabase } from "./db/databaseConnection.js";
import bodyParser from "body-parser";
import { errorCatcherMiddleware } from "./middlewares/errorCatcher.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoute from "./routes/doctorRoute.js";
import appointmentRoutes from "./routes/appointmentRouter.js";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());

// this function connects database with our backend
connectDatabase();

// get the saved image with this route
app.use("/images", express.static(path.join(__dirname, "uploads")));

// bodyparser
app.use(bodyParser.json());

app.use("/doctor", doctorRoute);
app.use("/user", userRoutes);
app.use("/appointment", appointmentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening On Port ${process.env.PORT}`);
});

app.use(errorCatcherMiddleware);
