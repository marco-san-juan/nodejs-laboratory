"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
    static initModel(sequelize) {
        Product.init({
            ProdID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
                autoIncrement: true,
            },
            ProdName: {
                type: sequelize_1.DataTypes.STRING,
            },
            Base_Cost: {
                type: sequelize_1.DataTypes.FLOAT
            }
        }, {
            sequelize,
            underscored: false,
            timestamps: false,
            tableName: 'Product',
        });
    }
}
exports.default = Product;
