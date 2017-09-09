const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const loadFile = (req, res, filePath, type) => {
  res.writeHead(200, { 'Content-Type': type });
  res.write(filePath);
  res.end();
};

const getIndex = (req, res) => {
  loadFile(req, res, index, 'text/html');
};

const getPage2 = (req, res) => {
  loadFile(req, res, page2, 'text/html');
};

const getPage3 = (req, res) => {
  loadFile(req, res, page3, 'text/html');
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
module.exports.getPage3 = getPage3;
