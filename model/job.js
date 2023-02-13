const { UniqueConstraintError } = require("sequelize");
//const sequle=require("./index")
module.exports = (sequelize, DataType) => {
//class JobsDataAccessor{
    //constructor() {
        //const DataType=sequle.DataTypes;
        const JOB = sequelize.define(
            "job",
            {
                idJob: {
                    primaryKey:true,
                    type: DataType.INTEGER,
                    allowNull: false,
                    autoIncrement:true
                },
                name: {
                    
                    type: DataType.STRING,
                },
                genralDiscription: {
                    type: DataType.TEXT,
                },
                idField: {
                    type: DataType.INTEGER,
                },
                idSubject: {
                    type: DataType.INTEGER,
                },
                idCity: {
                    type: DataType.INTEGER,
                },
                neededCharacters: {
                    type: DataType.STRING,
                },
                company: {
                    type: DataType.STRING,
                    allowNull: false,
                },
                employerId: {
                    type: DataType.STRING,
                    allowNull: false,
                },
            },
            {
            timestamps: false,
            }
        );
    return JOB;
    }
   
//}
// const jobsDataAccessor = new JobsDataAccessor();
// module.exports = jobsDataAccessor;