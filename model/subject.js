// const sequle=require("./index")
// class SubjectDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
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
    return SUBJECT;
    }
   
//     }
// const subjectDataAccessor = new SubjectDataAccessor();
// module.exports = subjectDataAccessor;