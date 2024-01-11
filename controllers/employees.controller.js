import { db } from "../utils/db.connect.js"; 

export const getEmployees = (req, res) => {
   
  const q = "SELECT * FROM employees";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const addEmployee = (req, res) => {
  const q = "INSERT INTO employees (`firstName`, `lastName`, `email`) VALUES (?, ?, ?)";

  db.query(
    q,
    [req.body.firstName, req.body.lastName, req.body.email],
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json(err);
      }
  
      if (data.affectedRows > 0) {
        return res.json("Employee added successfully!");
      } else {
        return res.status(403).json("Failed to add employee.");
      }
    }
  );
  
  };
 
