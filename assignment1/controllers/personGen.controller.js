const { generatePerson, savePersonToDB, getAllPersons } = require('../services/personGen.service');
const responseHandle = require('../common/responseHandle');
const errorHandle = require('../utils/error');
const parseBody = require('../common/parseBody');

/**
 * ===== Generate Person =====
 * @param {object} req 
 * @param {object} res 
 */
const personGen = async(req, res) => {
    if (req.method === 'POST') {
        // const body = await parseBody(req);
        // const userData = JSON.parse(body);
        const person = await generatePerson();

        console.log(person);

        savePersonToDB(person, (err) => {
            if (err) {
                errorHandle(res, 500, `${err.message}`);
            } else {
                responseHandle(res, 'Person Data Saved Successfully');
            }
        });
    }
};

/**
 * ====== Get Person =====
 * @param {*} req 
 * @param {*} res 
 */
const getPersons = (req, res) => {
    if (req.method === 'GET') {
        getAllPersons((err, persons) => {
            if (err) errorHandle(res, 500, 'Error fetching persons');
            responseHandle(res, persons);
        });
    }
};

module.exports = { personGen, getPersons };