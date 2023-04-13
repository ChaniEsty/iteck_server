const { UniqueConstraintError } = require("sequelize");
const { sequelize, DataTypes } = require("./sequelize");
const JOB = sequelize.define(
    "job",
    {
        idjob: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {

            type: DataTypes.STRING,
        },
        genralDiscription: {
            type: DataTypes.TEXT,
        },
        idField: {
            type: DataTypes.INTEGER,
        },
        idSubject: {
            type: DataTypes.INTEGER,
        },
        idCity: {
            type: DataTypes.INTEGER,
        },
        neededCharacters: {
            type: DataTypes.STRING,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        employerId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = JOB;