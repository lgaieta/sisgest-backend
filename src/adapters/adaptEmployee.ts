import { RowDataPacket } from 'mysql2';

const adaptEmployee = (data: RowDataPacket[]) => {
    const { id_empleado, nombres, apellidos, id_cliente } = data[0];
    return {
        id: id_empleado,
        names: nombres,
        surnames: apellidos,
        client_id: id_cliente,
    };
};

export default adaptEmployee;
