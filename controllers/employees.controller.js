import { db } from "../utils/db.connect.js";
import {sendEmail} from "../utils/email.js"
export const getEmployees = (req, res) => {
  // Assuming page and pageSize are parameters from the front-end
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 5;

  // Calculate the offset based on the current page and pageSize
  const offset = (page - 1) * pageSize;

  // Query to get paginated data
  const getDataQuery = `SELECT * FROM employees LIMIT ${pageSize} OFFSET ${offset}`;

  // Query to get total number of employees
  const getTotalCountQuery = 'SELECT COUNT(*) as totalCount FROM employees';

  // Perform both queries in parallel using Promise.all
  Promise.all([
    new Promise((resolve, reject) => {
      // Fetch paginated data
      db.query(getDataQuery, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    }),
    new Promise((resolve, reject) => {
      // Fetch total count of employees
      db.query(getTotalCountQuery, (err, result) => {
        if (err) {
          reject(err);
        } else {
          const totalCount = result[0].totalCount || 0;
          resolve(totalCount);
        }
      });
    }),
  ])
    .then(([data, totalCount]) => {
      const totalPages = Math.ceil(totalCount / pageSize);
      const currentPage = Math.min(page, totalPages);

      // Send the response with the requested information
      res.json({
        data,
        totalEmployees: totalCount,
        currentPage,
        totalPage: totalPages,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
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
  const {email, subject, body} = req.body;
   
  try {
    for (let i = 0; i < email.length; i++) {
       sendEmail(email[i], subject, body);
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

