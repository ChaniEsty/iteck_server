const sequle=require("./index")
class SubjectDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const SUBJECT = sequle.sequelize.define(
            "subject",
            {
                idSubject: {
                    type: DataType.INT,
                    allowNull: false,
                },
                name: {
                    type: DataType.STRING,
                },
            },
            {
            timestamps: false,
            }
        );
    
    }
   
    }
  
const subjectDataAccessor = new SubjectDataAccessor();
module.exports = subjectDataAccessor;