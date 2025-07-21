// backend/routes/graffiti.routes.js
const express = require('express');
const router = express.Router();
const graffitiController = require('../controllers/graffiti.controller');

// Routes
router.get('/', graffitiController.getAllGraffiti);
router.post('/', graffitiController.createGraffiti);
router.put('/:id', graffitiController.updateGraffiti);
router.delete('/:id', graffitiController.deleteGraffiti);
router.put('/:id/like', graffitiController.likeGraffiti);
router.put('/:id/dislike', graffitiController.dislikeGraffiti);

module.exports = router;
