import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "ladpm",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

try {
  const connection = await db.getConnection();
  console.log("MySQL connected!");
  connection.release();
} catch (error) {
  console.error("MySQL connection error:", error);
}