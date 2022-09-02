import Employee from '@entities/Employee.entity';
import updateEmployeeService from '@services/updateEmployee.service';

type UpdateEmployee = (data: Partial<Employee>) => Promise<void>;

const updateEmployee: UpdateEmployee = async data => {
    return await updateEmployeeService(data).catch(e => {
        throw e;
    });
};

export default updateEmployee;
