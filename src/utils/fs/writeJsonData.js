const fs = require('fs/promises');

const writeJsonData = async (path, newContent) => {
  await fs.writeFile(path, JSON.stringify(newContent));
};

module.exports = writeJsonData;