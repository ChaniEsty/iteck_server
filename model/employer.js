const { sequelize, DataTypes } = require("./sequelize");

const EMPLOYER = sequelize.define(
    "employer",
    {
        email: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        idEmp: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },
    {
        timestamps: false,
    }
);

module.exports = EMPLOYER;