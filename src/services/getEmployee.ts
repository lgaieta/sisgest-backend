import { dbPromisedPool } from '@db/dbPool';
import { RowDataPacket } from 'mysql2';

const getEmployee = async (id: number) => {
    const [rows] = await dbPromisedPool.query<RowDataPacket[]>(
        'select * from empleado where id_empleado = ?',
        [id]
    );
    return rows;
};

export default getEmployee;
