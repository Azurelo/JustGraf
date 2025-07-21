// backend/controllers/graffiti.controller.js
const Graffiti = require('../models/graffiti');

// Get all graffiti entries
exports.getAllGraffiti = async (req, res) => {
  try {
    const graffiti = await Graffiti.find();
    res.json(graffiti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new graffiti entry
exports.createGraffiti = async (req, res) => {
  try {
    const newGraffiti = new Graffiti(req.body);
    await newGraffiti.save();
    res.status(201).json(newGraffiti);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing graffiti entry
exports.updateGraffiti = async (req, res) => {
  try {
    const updatedGraffiti = await Graffiti.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedGraffiti);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a graffiti entry
exports.deleteGraffiti = async (req, res) => {
  try {
    await Graffiti.findByIdAndDelete(req.params.id);
    res.json({ message: 'Graffiti deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Increment likes
exports.likeGraffiti = async (req, res) => {
  try {
    const graffiti = await Graffiti.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true });
    res.json(graffiti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Increment dislikes
exports.dislikeGraffiti = async (req, res) => {
  try {
    const graffiti = await Graffiti.findByIdAndUpdate(req.params.id, { $inc: { dislikes: 1 } }, { new: true });
    res.json(graffiti);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};