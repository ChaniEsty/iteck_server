const { sequelize, DataTypes } = require("./sequelize");
const CITY = sequelize.define(
    "city",
    {
        idCity: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = CITY;