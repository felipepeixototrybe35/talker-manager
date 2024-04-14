const express = require('express');
const path = require('path');
const readJsonData = require('../utils/fs/readJsonData');
const writeJsonData = require('../utils/fs/writeJsonData');
const auth = require('../middlewares/auth');
const aut = require('../middlewares/validateTalker');

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

router.put('/talker/:id',
  auth,
  aut.validateName,
  aut.validateAge,
  aut.validateTalk,
  aut.validateWatchedAt,
  aut.validateRate,
  async (req, res) => {
    const { id } = req.params;
    const talkerJson = await readJsonData(PATH);
    if (talkerJson.find((el) => el.id === Number(id)) === undefined) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    const newTalkerJson = talkerJson.map((e) => {
      if (e.id === Number(id)) return { id: Number(id), ...req.body };
      return e;
    });
    await writeJsonData(PATH, newTalkerJson);
    res.status(200).json({ id: Number(id), ...req.body });
  });

router.post('/talker',
  auth,
  aut.validateName,
  aut.validateAge,
  aut.validateTalk,
  aut.validateWatchedAt,
  aut.validateRate,
  async (req, res) => {
    const newTalker = { ...req.body };
    const dataJson = await readJsonData(PATH);
    const nextId = (dataJson.length + 1);
    dataJson.push({ id: nextId, ...newTalker });
    await writeJsonData(PATH, dataJson);
    res.status(201).json({ id: nextId, ...newTalker });
  });

module.exports = router;