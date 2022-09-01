import express from 'express';
import { employeeRouter } from 'routes/EmployeRoutes';

const app = express();

app.use('/empleado', employeeRouter);

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
