const getRandomValue = require('../services/randomNumber.service');
const parseUrl = require('../common/parseUrl');
const responseHandle = require('../common/responseHandle');
const errorHandle = require('../utils/error');

/**
 * ===== Generate Random Number Controller ====
 * @param {object} req 
 * @param {object} res 
 */
function generateRandomNumber(req, res) {
    const { query } = parseUrl(req.url);
    const { start, end } = query;

    if (start && end) {
        const random = getRandomValue(start, end);
        responseHandle(res, random);
    } else {
        errorHandle(res, 400, 'Missing start and/or end parameters');
    }
}

module.exports = generateRandomNumber;
