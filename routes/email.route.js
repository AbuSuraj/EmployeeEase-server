import express from "express";
import {sendEmail} from "../controllers/email.controllers.js";

const router = express.Router()
router.post("/login", sendEmail)



export default router