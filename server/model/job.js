class JobsDataAccessor{
    constructor() {
        const JOB = sequelize.define(
            "job",
            {
            idJob: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
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