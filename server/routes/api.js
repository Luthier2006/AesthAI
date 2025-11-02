const express = require('express');
const router = express.Router();
const { analyzeArtwork } = require('../services/ai');

router.post('/analyze', async (req, res) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ error: 'No content provided' });

  const critiques = await analyzeArtwork(content);
  res.json({ critiques });
});

module.exports = router;
