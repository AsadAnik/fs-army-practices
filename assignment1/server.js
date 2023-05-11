const app = require('./app/app');

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, (err) => {
    if (err) return console.log(`Something is wrong at http://${HOST}:${PORT}`);
    console.log(`Server is running on : http://${HOST}:${PORT}`);
});