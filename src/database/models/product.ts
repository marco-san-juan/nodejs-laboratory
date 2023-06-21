import { Model, Sequelize, DataTypes, NUMBER } from 'sequelize';
import { ProductsAttribute } from '../attributes';

class Product extends Model implements ProductsAttribute {
   public ProdID!: string;
   public ProdName!: string;
   Base_Cost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                ProdID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                ProdName: {
                    type: DataTypes.STRING,
                },
                Base_Cost: {
                    type: DataTypes.FLOAT
                }
    
            },
            {
                sequelize,
                underscored:false,
                timestamps: false,
                tableName: 'Product',
            }
        );
    }
}

export default Product;
