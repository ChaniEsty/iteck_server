const { sequelize, DataTypes } = require("./sequelize");
const FIELD = sequelize.define(
    "field",
    {
        idField: {
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

module.exports = FIELD;