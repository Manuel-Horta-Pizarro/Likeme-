const express = require("express");
const cors = require("cors");
const pool = require("./database"); 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los posts." });
  }
});


app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;
  if (!titulo || !img || !descripcion) {
    return res.status(400).json({ error: "Todos los campos son obligatorios." });
  }

  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
      [titulo, img, descripcion, 0]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el post." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});