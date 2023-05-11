const http = require('http');
const url = require('url');
const routes = require('../routes');

const handleRequest = (req, res) => {
  const { pathname } = url.parse(req.url, true);
  const currentRoute = routes[pathname] || routes['*'];
  const currentHandler = currentRoute[req.method] || routes['*'];
  currentHandler(req, res);
};

const server = http.createServer(handleRequest);

module.exports = server;
