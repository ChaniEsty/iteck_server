const { sequelize, DataTypes } = require("./sequelize");
const LOGIN = sequelize.define(
    "logIn",
    {
        email: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    },
    {
        timestamps: false,
    }
);

module.exports = LOGIN;