import { db } from "../utils/db.connect.js";
import {sendEmail} from "../utils/email.js"
export const getEmployees = (req, res) => {
  // Assuming page and pageSize are parameters from the front-end
  const page = req.query.page || 1;
  const pageSize = req.query.pageSize || 5;
  
  // Calculate the offset based on the current page and pageSize
  const offset = (page - 1) * pageSize;

  const q = `SELECT * FROM employees LIMIT ${pageSize} OFFSET ${offset}`;

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }

    if (data.length > 0) {
      // console.log(data);
      return res.json(data);
    } else {
      return res.status(404).json("Employees not found");
    }
  });
};


export const addEmployee = (req, res) => {
  const employees = req.body;

  // If employees is an array, insert multiple employees
  if (Array.isArray(employees)) {
    const q = "INSERT INTO employees (`firstName`, `lastName`, `email`) VALUES ?";

    const values = employees.map(employee => [employee.firstName, employee.lastName, employee.email]);

    db.query(q, [values], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }

      if (data.affectedRows > 0) {
        return res.json("Employees added successfully!");
      } else {
        return res.status(403).json("Failed to add employees.");
      }
    });
  } else {
    // If employees is not an array, insert a single employee
    const q = "INSERT INTO employees (`firstName`, `lastName`, `email`) VALUES (?, ?, ?)";

    const employee = employees;
    const values = [employee.firstName, employee.lastName, employee.email];

    db.query(q, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }

      if (data.affectedRows > 0) {
        return res.json("Employee added successfully!");
      } else {
        return res.status(403).json("Failed to add employee.");
      }
    });
  }
};
export const customerSendEmail =  (req, res) => {
  const data = req.body;
  try {
    for (let i = 0; i < data.length; i++) {
       sendEmail(data[i]);
    }
    res.status(200).json({
      message: "All emails sent successful",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "All emails sent failed",
    });
  }
};

