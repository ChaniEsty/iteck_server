// const sequle=require("./index")
// class SubjectDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const SUBJECT = sequelize.define(
            "subject",
            {
                idSubject: {
                    primaryKey:true,
                    autoIncrement:true,
                    type: DataType.INTEGER,
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
    return SUBJECT;
    }
   
//     }
// const subjectDataAccessor = new SubjectDataAccessor();
// module.exports = subjectDataAccessor;