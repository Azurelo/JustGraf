// backend/routes/graffitiRoutes.js
const express = require('express');
const router = express.Router();
const Graffiti = require('../models/graffiti');

// Create
router.post('/', async (req, res) => {
  try {
    const graffiti = new Graffiti(req.body);
    await graffiti.save();
    res.status(201).json(graffiti);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all
router.get('/', async (req, res) => {
  const graffiti = await Graffiti.find();
  res.json(graffiti);
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const graffiti = await Graffiti.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(graffiti);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Graffiti.findByIdAndDelete(req.params.id);
    res.json({ message: 'Graffiti deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Like
router.put('/:id/like', async (req, res) => {
  try {
    const graffiti = await Graffiti.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
    res.json(graffiti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Dislike
router.put('/:id/dislike', async (req, res) => {
  try {
    const graffiti = await Graffiti.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } }, { new: true });
    res.json(graffiti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
