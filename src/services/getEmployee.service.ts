import { dbPromisedPool } from '@db/dbPool';
import { RowDataPacket } from 'mysql2';
import { genErrorWithCode } from 'utils/genErrorWithCode';

const getEmployee = async (id: number) => {
    try {
        const [rows] = await dbPromisedPool.query<RowDataPacket[]>(
            'select * from empleado where id_empleado = ?',
            [id]
        );
        if (rows[0] === undefined) throw genErrorWithCode('Employee not found.', 404);
        return rows;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

export default getEmployee;
