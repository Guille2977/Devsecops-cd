const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>DevSecOps CD</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b, #312e81);
          color: #f8fafc;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .container {
          width: 100%;
          max-width: 1000px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(12px);
        }

        .badge {
          display: inline-block;
          padding: 8px 14px;
          background: #22c55e;
          color: #052e16;
          border-radius: 999px;
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 20px;
        }

        h1 {
          font-size: 42px;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 32px;
          max-width: 750px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .card {
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(148, 163, 184, 0.25);
          border-radius: 18px;
          padding: 22px;
        }

        .card h3 {
          font-size: 18px;
          margin-bottom: 10px;
          color: #93c5fd;
        }

        .card p {
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.5;
        }

        .flow {
          margin-top: 35px;
          padding: 20px;
          background: rgba(2, 6, 23, 0.65);
          border-radius: 16px;
          text-align: center;
          color: #e2e8f0;
          font-weight: bold;
        }

        .version {
          margin-top: 30px;
          padding: 14px 18px;
          background: rgba(34, 197, 94, 0.15);
          border: 1px solid rgba(34, 197, 94, 0.45);
          border-radius: 14px;
          color: #bbf7d0;
          font-weight: bold;
        }

        footer {
          margin-top: 28px;
          color: #94a3b8;
          font-size: 14px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <main class="container">
        <span class="badge">Deploy activo</span>

        <h1>Aplicación DevSecOps - Continuous Deployment</h1>

        <p class="subtitle">
          Aplicación web desarrollada con Node.js y Express, desplegada automáticamente
          en Render mediante un pipeline de GitHub Actions.
        </p>

        <section class="grid">
          <div class="card">
            <h3>Desarrollo</h3>
            <p>
              El código fuente se gestiona con Git y se almacena en un repositorio remoto de GitHub.
            </p>
          </div>

          <div class="card">
            <h3>Pipeline CD</h3>
            <p>
              GitHub Actions ejecuta instalación de dependencias, pruebas básicas y análisis de seguridad.
            </p>
          </div>

          <div class="card">
            <h3>Despliegue</h3>
            <p>
              Render recibe la activación mediante Deploy Hook y publica automáticamente la nueva versión.
            </p>
          </div>
        </section>

        <div class="flow">
          GitHub → GitHub Actions → Deploy Hook → Render → Aplicación publicada
        </div>

        <div class="version">
          Versión 3.0 - Interfaz mejorada y despliegue automático verificado
        </div>

        <footer>
          Taller de Aplicaciones Distribuidas | DevSecOps CD
        </footer>
      </main>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});