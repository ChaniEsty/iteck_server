const { sequelize, DataTypes } = require("./sequelize");
const USERJOBS = sequelize.define(
    "userjobs",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idJob: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
);

module.exports = USERJOBS;