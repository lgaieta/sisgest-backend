import Employee from '@entities/Employee.entity';
import saveEmployee from '@services/saveEmployee.service';

type CreateEmployee = (data: Omit<Employee, 'id'>) => Promise<void>;

const createEmployee: CreateEmployee = async data => {
    return await saveEmployee(data);
};

export default createEmployee;
