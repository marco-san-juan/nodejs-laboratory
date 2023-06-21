import { Model, Sequelize, DataTypes, NUMBER } from 'sequelize';
import { QueryHandlingAttribute } from '../attributes';

class QueryHandling extends Model implements QueryHandlingAttribute{

   public QID!:string;
   public Sub_Date!: Date;
   public Cust_ID! : string;
   public EmpID!: string;
   public Res_Date!: Date;
   public Status!: string;
   public Feedback!: string;
   public Query_Text!: string;
   public Query_Response!: string;
   
     static initModel(sequelize: Sequelize): void {
         QueryHandling.init(
             {
                 QID: {
                     type: DataTypes.STRING,
                     primaryKey: true,
                     autoIncrement: true,
                 },
                 Sub_Date: {
                     type: DataTypes.DATE,
                 },
                 Cust_ID: {
                     type: DataTypes.STRING
                 },
                 EmpID: {
                    type: DataTypes.STRING
                    
                },
                Res_Date: {
                    type: DataTypes.DATE
                },
                Status: {
                    type: DataTypes.STRING
                },
                Feedback: {
                    type: DataTypes.STRING
                },
                Query_Text: {
                    type: DataTypes.STRING
                },
                Query_Response: {
                    type: DataTypes.STRING
                },
     
             },
             {
                 sequelize,
                 underscored:false,
                 timestamps: false,
                 tableName: 'QueryHandling',
             }
         );
     }
 }
 
 export default QueryHandling;
 