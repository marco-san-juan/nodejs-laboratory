import { Model, Sequelize, DataTypes, NUMBER } from 'sequelize';
import { EmployeesAttribute } from '../attributes';

class Employee extends Model implements EmployeesAttribute {
    public EmpID!: string; 
    public EFirstName!: string;
    public ELastName!: string;
    public Address!: string;
    public Age!: number;
    public D_join!: Date;
    public Dept!: string;
    public Salary!: number;
  

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                EmpID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                EFirstName: {
                    type: DataTypes.STRING,
                },
                ELastName: {
                    type: DataTypes.STRING,
                },
                Address: {
                    type: DataTypes.STRING,
                },
                Age:{
                    type: DataTypes.NUMBER,

                },
                D_join: {
                    type: DataTypes.DATE,
                },
                Dept: {
                    type: DataTypes.STRING,
                },
                Salary: {
                    type: DataTypes.FLOAT,
                },
            },
            {
                sequelize,
                underscored:false,
                timestamps: false,
                tableName: 'Employees',
            }
        );
    }
}

export default Employee;
