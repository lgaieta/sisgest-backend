import Employee from '@entities/Employee.entity';
import { RowDataPacket } from 'mysql2';
import adaptEmployee from './adaptEmployee';
import { Adapter } from './Adapter';

// const adaptEmployees = (data: RowDataPacket[]) => data.reduce((prev, current) => [...prev, adaptEmployee([current])], [])

const adaptEmployees: Adapter<RowDataPacket[], Employee[]> = rows => rows as Employee[];

export default adaptEmployees;
