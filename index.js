const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar rutas
const estudianteRoutes = require('./routes/estudiantesRutas');

// Rutas
app.use('/api/estudiante', estudianteRoutes);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

