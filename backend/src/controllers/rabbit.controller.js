const { Rabbit } = require('../models');

// Create a new rabbit
exports.createRabbit = async (req, res) => {
  try {
    const rabbit = await Rabbit.create(req.body);
    res.status(201).json(rabbit);
  } catch (error) {
    res.status(500).json({ message: 'Error creating rabbit', error });
  }
};

// Get all rabbits
exports.getAllRabbits = async (req, res) => {
  try {
    const rabbits = await Rabbit.findAll();
    res.status(200).json(rabbits);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving rabbits', error });
  }
};

// Get a single rabbit by ID
exports.getRabbitById = async (req, res) => {
  try {
    const { id } = req.params;
    const rabbit = await Rabbit.findByPk(id);
    if (!rabbit) {
      return res.status(404).json({ message: 'Rabbit not found' });
    }
    res.status(200).json(rabbit);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving rabbit', error });
  }
};

// Update a rabbit
exports.updateRabbit = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Rabbit.update(req.body, {
      where: { rabbit_id: id },
    });
    if (updated) {
      const updatedRabbit = await Rabbit.findByPk(id);
      res.status(200).json(updatedRabbit);
    } else {
      res.status(404).json({ message: 'Rabbit not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating rabbit', error });
  }
};

// Delete a rabbit
exports.deleteRabbit = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Rabbit.destroy({
      where: { rabbit_id: id },
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Rabbit not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting rabbit', error });
  }
};
