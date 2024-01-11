import { db } from "../utils/db.connect.js"; 


export const getUsers = (req, res) => {
   
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const addUser = (req, res) => {
  

    const q =
      "UPDATE users SET `name`=?,`website`=?,`profilePic`=? WHERE id=? ";

    db.query(
      q,
      [
        req.body.name, 
        req.body.website, 
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Updated!");
        return res.status(403).json("You can update only your post!");
      }
    );
  };
 
