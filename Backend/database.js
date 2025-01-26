const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres", 
  host: "localhost",
  database: "likeme", 
  password: "Manuel123", 
  port: 5432,
});

const testDatabaseConnection = async () => {
  try {
    await pool.query("SELECT 1 + 1 AS result");
    console.log("Conexión exitosa a la base de datos.");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

testDatabaseConnection();

module.exports = pool;