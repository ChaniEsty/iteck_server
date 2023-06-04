const { sequelize, DataTypes } = require("./sequelize");
const USER = sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
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
        field: {
            type: DataTypes.TEXT,
        },
        subject: {
            type: DataTypes.TEXT,
        },
        city: {
            type: DataTypes.TEXT,
        },
        characters: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = USER;