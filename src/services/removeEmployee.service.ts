import { dbPromisedPool } from '@db/dbPool';

const removeEmployee = async (id: number) => {
    try {
        await dbPromisedPool.query('delete from empleado where id_empleado = ?', [id]);
    } catch (e) {
        console.log(e);
        throw e;
    }
};

export default removeEmployee;
