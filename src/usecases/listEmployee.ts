import Employee from '@entities/Employee.entity';
import getEmployee from '@services/getEmployee.service';
import adaptEmployee from 'adapters/adaptEmployee';

/** List a single employee by its id.*/
type ListEmployee = (id: number) => Promise<Employee>;

const listEmployee: ListEmployee = async id => {
    return adaptEmployee(await getEmployee(id));
};

export default listEmployee;
