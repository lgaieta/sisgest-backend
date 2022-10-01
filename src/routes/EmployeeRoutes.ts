import createEmployee from '@usecases/createEmployee';
import deleteEmployee from '@usecases/deleteEmployee';
import listEmployee from '@usecases/listEmployee';
import listEmployees from '@usecases/listEmployees';
import updateEmployee from '@usecases/updateEmployee';
import express from 'express';
import { ErrorWithCode } from 'utils/genErrorWithCode';

const router = express.Router();

router.get('/', (req, res) => {
    listEmployees()
        .then(data => res.json(data))
        .catch(e => {
            if (e instanceof ErrorWithCode) res.status(e.code).send(e.message);
            else res.sendStatus(400);
        });
});

/**
 * Gets employee by id
 * @swagger
 * /employee/{id}:
 *  get:
 *      tags:
 *          -  Employee
 */
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

router.delete('/:id', (req, res) => {
    deleteEmployee(+req.params.id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));
});

router.put('/', (req, res) => {
    updateEmployee(req.body)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(400));
});

export { router as employeeRouter };
