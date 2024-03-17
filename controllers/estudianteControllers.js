const connection = require('../dataBase/db');

// Obtener todos los productos
exports.getEstudiante = (req, res) => {
  const query = 'SELECT * FROM students';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// Obtener un producto por ID
exports.getEstudianteById = (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM students WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

// Crear un nuevo producto
exports.createEstudiante = (req, res) => {
  const { id, nombre, edad } = req.body;

  // Validación de datos
  if (!id || !nombre || !edad) {
    return res.status(400).json({ error: 'Se requieren todos los campos: id, nombre y edad.' });
  }

  const query = 'INSERT INTO students (id, nombre, edad) VALUES (?, ?, ?)';
  connection.query(query, [id, nombre, edad], (err, result) => {
    if (err) {
      // Manejo de errores
      console.error('Error al agregar estudiante:', err);
      return res.status(500).json({ error: 'Error interno del servidor al agregar estudiante.' });
    }
    // Éxito
    res.json({ message: 'Estudiante agregado exitosamente' });
  });
};


// Actualizar un producto por ID
exports.updateEstudiante = (req, res) => {
  const iD = req.params.id;
  const { id, nombre, edad } = req.body;
  const query = 'UPDATE students SET id = ?, nombre = ?, edad = ? WHERE id = ?';
  connection.query(query, [id, nombre, edad, iD], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Estudiante actualizado exitosamente' });
  });
};

// Eliminar un producto por ID
exports.deleteEstudiante = (req, res) => {
  const id = req.params.id;
  const query = 'DELETE FROM students WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Estudiante eliminado exitosamente' });
  });
};

