import express from 'express';
import { dbPool } from './db/dbPool';

const app = express();

app.get('/', (_req, res) => {
    dbPool.query('select * from cliente;', (error, rows) => {
        if (error) console.log(error);
        else console.log(rows);
    });
    res.send('Nice');
});

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
