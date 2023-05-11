/**
 * ===== Error Handler =====
 * @param {object} res 
 */
const errorHandle = (res, statusCode = 500, msg = 'something went wrong') => {
    res.statusCode = statusCode;
    res.end(msg);
}

module.exports = errorHandle;
