import { dbPromisedPool } from '@db/dbPool';
import Employee from '@entities/Employee.entity';
import { ResultSetHeader } from 'mysql2';

const updateEmployeeService = async (data: Partial<Employee>) => {
    try {
        const queryValues = [data.names, data.surnames, data.client_id, +data.id!];

        const fields = `${data.names ? 'nombres = ?' : ''}
        ${data.surnames ? ',apellidos = ?' : ''}
        ${data.client_id ? ',id_cliente = ?' : ''}`;

        await dbPromisedPool.query<ResultSetHeader>(
            `update empleado set ${fields} where id_empleado = ?`,
            queryValues.filter(value => value !== undefined)
        );
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default updateEmployeeService;
