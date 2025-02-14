const express = require("express");
const cors = require("cors");
require("dotenv").config();
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", postRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});