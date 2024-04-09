/* Importamos o módulo fs para utilizar o método readFile. */
const fs = require('fs/promises');

/* A função recebe como parâmetro o caminho do arquivo que será lido. */
const readJsonData = async (path) => {
  /* Utilizamos a função readFile para ler o conteúdo do arquivo. */
  const content = await fs.readFile(path, 'utf8');

  /* Retornamos o conteúdo convertido em um objeto JavaScript. */
  return JSON.parse(content);
};

module.exports = readJsonData;