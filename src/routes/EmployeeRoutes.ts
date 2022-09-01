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

export { router as employeeRouter };
