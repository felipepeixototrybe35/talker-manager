const aut = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  if (authorization.length !== 16) return res.status(401).json({ message: 'Token inválido' });
  next();
};

const validateName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (req.body.name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  if (!req.body.age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (!(Number.isInteger(req.body.age)) || req.body.age < 18) {
    return res.status(400).json(
      {
        message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
      },
    );
  }
  next();
};

const validateTalk = (req, res, next) => {
  if (!req.body.talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const regexDate = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!watchedAt) {  
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!(regexDate.test(watchedAt))) {  
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (rate === undefined) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    return res.status(400).json(
      {
        message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
      },
    );
  }
  next();
};

module.exports = {
  aut,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
};