// backend/models/graffiti.js
const mongoose = require('mongoose');

const graffitiSchema = new mongoose.Schema({
  title: String,
  artist: String,
  location: String,
  imageUrl: String,
  description: String,
  likes: {
  type: Number,
  default: 0,
},
dislikes: {
  type: Number,
  default: 0,
},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Graffiti', graffitiSchema);
