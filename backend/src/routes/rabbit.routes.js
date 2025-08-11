const express = require('express');
const router = express.Router();
const rabbitController = require('../controllers/rabbit.controller');

// Create a new rabbit
router.post('/', rabbitController.createRabbit);

// Get all rabbits
router.get('/', rabbitController.getAllRabbits);

// Get a single rabbit by ID
router.get('/:id', rabbitController.getRabbitById);

// Update a rabbit
router.put('/:id', rabbitController.updateRabbit);

// Delete a rabbit
router.delete('/:id', rabbitController.deleteRabbit);

module.exports = router;
