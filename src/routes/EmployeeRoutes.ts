import createEmployee from '@usecases/createEmployee';
import listEmployee from '@usecases/listEmployee';
import express from 'express';
import { ErrorWithCode } from 'utils/genErrorWithCode';

const router = express.Router();

router.get('/:id', (req, res) => {
    listEmployee(+req.params.id)
        .then(data => res.json(data))
        .catch(e => {
            if (e instanceof ErrorWithCode) res.status(e.code).send(e.message);
            else res.sendStatus(400);
        });
});

router.post('/', (req, res) => {
    createEmployee(req.body)
        .then(() => res.sendStatus(201))
        .catch(() => res.sendStatus(400));
});

export { router as employeeRouter };
