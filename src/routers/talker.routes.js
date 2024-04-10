const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');

const router = express.Router();
const PATH = path.resolve('src', 'talker.json');

router.get('/talker', async (req, res) => {
  const content = await readJsonData(PATH);
  
  if (!content) return res.status(200).json([]);
  res.status(200).json(content);
});

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const content = await readJsonData(PATH);
  const talkerFound = content.find((talker) => talker.id === +id);

  if (!talkerFound) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  res.status(200).json(talkerFound);
});

module.exports = router;