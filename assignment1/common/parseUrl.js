const url = require('url');

/**
 * ===== Parse URL ========
 * @param {*} requestUrl 
 * @returns 
 */
function parseUrl(requestUrl) {
    return url.parse(requestUrl, true);
}

module.exports = parseUrl;