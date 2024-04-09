const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');
const router = express.Router();
const PATH = path.resolve('src', 'talker.json');

router.get('/talker', async (req, res) => {
  const content = await readJsonData(PATH);
  
  if (!content) return res.status(200).json([]);
  res.status(HTTP_OK_STATUS).json(content);
});

module.exports = router;