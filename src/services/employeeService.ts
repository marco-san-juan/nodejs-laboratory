import { db } from '../database/models';
import Employee from '../database/models/employee';

class EmployeeService {
    private static instance: EmployeeService;

    static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService();
        }
        return EmployeeService.instance;
    }

    findAll = async () => {
        const employees: Employee[] = await Employee.findAll();
        return employees;
    };

    findById = async (id:string) => {
        const employee: Employee  | null = await Employee.findByPk(id);
        return employee;
    };
    update = async (id: string, object: any) => {
      if (!object && Object.keys(object).length == 0) {
        throw new Error(
          'Object to be updated must contain at least one property.'
        );
      }
  
      let existingemployee = await this.findById(id);
      if (!existingemployee) {
        throw new Error('employee_not_found');
      }
  
      try {
        await Employee.update(
          { ...object },
          {
            where: { EmpID:id },
          }
        );
  
        existingemployee = await this.findById(id);
        return existingemployee;
      } catch (err) {
        throw err;
      }
    };

    deleteByPrimaryKey = async (id: string) => {
      let existingemployee = await this.findById(id);
      if (!existingemployee) {
        throw new Error('employee_not_found');
      }
  
      try {
        await existingemployee.destroy();
      } catch (err) {
        throw err;
      }
    };
      

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Must contain at least 1 property');
            }
            const employee = await Employee.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };
}

export default EmployeeService;
