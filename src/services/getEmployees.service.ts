import { dbPromisedPool } from '@db/dbPool';
import { RowDataPacket } from 'mysql2';

const getEmployees = async () => {
    try {
        const [rows] = await dbPromisedPool.query<RowDataPacket[]>(
            'select * from empleado'
        );
        return rows;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default getEmployees;
