import express from 'express';
const app = express();

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8080;

app.get('/', (_req, res) => {
    res.send(`<h1>Hello I am a Server </h1>`);
});

// App is listening on PORT and HOST as mentioned..
app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});