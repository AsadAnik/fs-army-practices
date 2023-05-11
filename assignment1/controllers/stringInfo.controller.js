const parseBody = require('../common/parseBody');
const countCharactersService = require('../services/stringInfo.service');
const responseHandle = require('../common/responseHandle');

/**
 * ===== Getting String Info from Text =====
 * @param {object} req 
 * @param {object} res 
 */
const stringInfo = async(req, res) => {
    const body = await parseBody(req);
    const { text } = JSON.parse(body);
    const { letters, numbers, symbols } = countCharactersService(text);
    responseHandle(res, { letters, numbers, symbols });
}

module.exports = stringInfo;
