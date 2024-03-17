const express = require('express');
const router = express.Router();
const productController = require('../controllers/estudianteControllers');

// Rutas para productos
router.get('/', productController.getEstudiante);
router.get('/:id', productController.getEstudianteById);
router.post('/', productController.createEstudiante);
router.put('/:id', productController.updateEstudiante);
router.delete('/:id', productController.deleteEstudiante);

module.exports = router;