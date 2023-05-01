const { sequelize, DataTypes } = require("./sequelize");

const EMPLOYER = sequelize.define(
    "employer",
    {
        email: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
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