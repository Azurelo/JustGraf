// backend/models/graffiti.js
const mongoose = require('mongoose');

const graffitiSchema = new mongoose.Schema({
  title: String,
  artist: String,
  location: String,
  imageUrl: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Graffiti', graffitiSchema);
