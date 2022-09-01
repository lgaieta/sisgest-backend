import listEmployee from '@usecases/listEmployee';
import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
    listEmployee(+req.params.id).then(data => res.json(data));
});

export { router as employeeRouter };
