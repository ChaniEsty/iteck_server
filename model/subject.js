const { sequelize, DataTypes } = require("./sequelize");
const SUBJECT = sequelize.define(
    "subject",
    {
        idSubject: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = SUBJECT;