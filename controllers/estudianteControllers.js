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
  const { nombre, edad, cel} = req.body;

  // Validación de datos
  if (!nombre || !edad || !cel) {
    return res.status(400).json({ error: 'Se requieren todos los campos: nombre, edad y celular.' });
  }

  const query = 'INSERT INTO students (nombre, edad, cel) VALUES (?, ?, ?)';
  connection.query(query, [nombre, edad, cel], (err, result) => {
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
  const id = req.params.id;
  const { nombre, edad, cel } = req.body;
  const query = 'UPDATE students SET nombre = ?, edad = ?, edad = ? WHERE id = ?';
  connection.query(query, [nombre, edad, cel, id], (err, result) => {
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

