import express from "express";
import authRoutes from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
const app = express();

app.use(express.json());
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
  app.use(express.json());
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );

app.use(cookieParser());

  

app.use("/api/email", authRoutes);
app.use("/api/users", userRoutes);
app.listen(5000, () => {
    console.log("API working!");
  });