import { default as removeEmployeeService } from '@services/removeEmployee.service';

type DeleteEmployee = (id: number) => Promise<void>;

const deleteEmployee: DeleteEmployee = async id => {
    return removeEmployeeService(id);
};

export default deleteEmployee;
