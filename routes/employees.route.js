import express from "express";
import { getEmployees, addEmployee, customerSendEmail} from "../controllers/employees.controller.js";

const router = express.Router()

router.get("/", getEmployees)
router.post("/", addEmployee)
router.post("/send-email", customerSendEmail)


export default router