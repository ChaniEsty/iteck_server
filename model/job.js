const { UniqueConstraintError } = require("sequelize");
//const sequle=require("./index")
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
//class JobsDataAccessor{
//constructor() {
//const DataType=sequle.DataTypes;
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
// return JOB;
// }

//}
// const jobsDataAccessor = new JobsDataAccessor();
// module.exports = jobsDataAccessor;
module.exports = JOB;