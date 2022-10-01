import adaptEmployees from '@adapters/adaptEmployees';
import Employee from '@entities/Employee.entity';
import getEmployees from '@services/getEmployees.service';

type ListEmployees = () => Promise<Employee[]>;

// @ts-ignore
const listEmployees: ListEmployees = async () => {
    return adaptEmployees(await getEmployees());
};

export default listEmployees;
