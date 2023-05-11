/**
 * ====== Body Parser ======
 * @param {object} req 
 * @returns 
 */
const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {
            resolve(body);
        });

        req.on('error', (err) => {
            reject(err);
        });
    });
};

module.exports = parseBody;
