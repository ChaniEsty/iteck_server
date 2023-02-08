const { UniqueConstraintError } = require("sequelize");
const sequle=require("./index")
class JobsDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const JOB = sequle.sequelize.define(
            "job",
            {
                idJob: {
                    primaryKey:true,
                    type: DataType.INT,
                    allowNull: false,
                    autoIncrement:true
                },
                name: {
                    type: DataType.STRING,
                },
                genralDiscription: {
                    type: DataType.STRING,
                },
                field: {
                    type: DataType.INT,
                },
                subject: {
                    type: DataType.INT,
                },
                city: {
                    type: DataType.INT,
                },
                neededCharecters: {
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
    
    }
   
}
  
const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;