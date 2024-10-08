import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

//PUBLIC
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// MIDDLEWARE
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import {authenticateUser} from "./middleware/authMiddleware.js"

// ROUTERS
import jobRouter from "./routes/jobRouter.js";
import authRouter  from "./routes/authRouter.js"
import userRouter from "./routes/userRouter.js"

dotenv.config();
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],  // Default source for content
      imgSrc: ["'self'", "data:", "https://res.cloudinary.com"],  // Allow images from self, data URIs, and Cloudinary
      scriptSrc: ["'self'"],  // Allow scripts from your own domain
    },
  },
}));
app.use(mongoSanitize());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/dist', 'index.html'));
});

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, '127.0.0.1', () => {
    console.log(`server working in PORT ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

