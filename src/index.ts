import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hey!</h1>');
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
