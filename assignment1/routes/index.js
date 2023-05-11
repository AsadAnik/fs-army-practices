const generateRandomNumber = require('../controllers/randomNumber.controller');
const { personGen, getPersons } = require('../controllers/personGen.controller');
const stringInfo = require('../controllers/stringInfo.controller');
const errorHandle = require('../utils/error');

const routes = {
  "/getRandomNumbers": {
    GET: generateRandomNumber,
  },
  "/generatePerson": {
    POST: personGen,
    GET: getPersons,
  },
  "/getStringInfo": {
    GET: stringInfo,
  },
  "*": {
    GET: (_, res) => errorHandle(res, 404, '<h1 style="align: center;">Page Not Found!<h1>'),
  }
};

module.exports = routes;
