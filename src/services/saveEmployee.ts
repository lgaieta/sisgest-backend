import { dbPromisedPool } from '@db/dbPool';
import Employee from '@entities/Employee.entity';
import { ResultSetHeader } from 'mysql2';

const saveEmployee = async (employeeData: Omit<Employee, 'id'>) => {
    try {
        const queryValues = [
            employeeData.names,
            employeeData.surnames,
            employeeData.client_id,
        ];
        await dbPromisedPool.query<ResultSetHeader>(
            'insert into empleado (nombres, apellidos, id_cliente) values (?, ?, ?)',
            queryValues
        );
    } catch (e) {
        throw e;
    }
};

export default saveEmployee;
