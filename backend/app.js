// backend/app.js
require('dotenv').config({ path: __dirname + '/.env' });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const graffitiRoutes = require('./routes/graffitiRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/graffiti', graffitiRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on http://localhost:3000/api/graffiti'));
  })
  .catch(err => console.error(err));
