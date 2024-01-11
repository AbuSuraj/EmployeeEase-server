import express from "express";
import { getEmployees, addEmployee} from "../controllers/employees.controller.js";

const router = express.Router()

router.get("/", getEmployees)
router.post("/", addEmployee)


export default router