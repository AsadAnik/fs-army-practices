/**
 * ===== Response Handler ======
 * @param {object} _req 
 * @param {object} res 
 * @param {*} result 
 */
const responseHandler = (res, result, statusCode = 200) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = statusCode;
        res.end(JSON.stringify({ result }));

    } catch(error) {
        res.statusCode = 500;
        res.end(`${error.message}`);
    }
};

module.exports = responseHandler;