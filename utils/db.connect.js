import mysql from "mysql2";

// Connection string
const connectionString = "mysql://43a5mdUeKWoCZAw.root:B2bhgFdXyPrm1qiW@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/test?ssl={\"rejectUnauthorized\":true}";

// mysql://43a5mdUeKWoCZAw.root:B2bhgFdXyPrm1qiW@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/test?ssl={"rejectUnauthorized":true}
 

// Create a connection pool
export const db = mysql.createPool(connectionString);