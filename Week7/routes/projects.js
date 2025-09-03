const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();
// Instead of: router.get('/', (req, res) => { res.json({ message: 'Get all projects' }); });
// Use: router.get('/', projectController.getAll);
// GET all projects
router.get('/', projectController.getAll);

// GET project by ID
router.get('/:id', projectController.getById);

// POST create new project
router.post('/', projectController.create);

// PUT update project
router.put('/:id', projectController.update);

// DELETE project
router.delete('/:id', projectController.remove);

module.exports = router;
