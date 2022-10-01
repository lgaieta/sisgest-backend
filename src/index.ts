import express from 'express';
import { employeeRouter } from '@routes/EmployeeRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSetup from '@docs/swagger';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
    })
);
app.use('/empleado', employeeRouter);
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSetup));

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});
