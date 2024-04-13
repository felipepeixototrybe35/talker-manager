const express = require('express');
const crypto = require('crypto');

const router = express.Router();

router.post('/login', (req, res) => {
  // const { email, password } = req.body;
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = router;