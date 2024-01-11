import express from "express";
import userRoutes from "./routes/users.route.js";
import emailRoutes from "./routes/email.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { config } from 'dotenv';
config();
const app = express();

app.use(express.json());
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(cors());
  // app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //   })
  // );

app.use(cookieParser());

  

app.use("/api/email", emailRoutes);
app.use("/api/users", userRoutes);
app.listen(5000, () => {
    console.log("API working!");
  });