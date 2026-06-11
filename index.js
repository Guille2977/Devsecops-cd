const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Aplicación DevSecOps - CD</h1>
    <p>Desplegada automáticamente en Azure App Service.</p>
    <p>Versión 1.0</p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});