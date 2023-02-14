// const sequle=require("./index")
// class SubjectDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
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
// return SUBJECT;
// }

//     }
// const subjectDataAccessor = new SubjectDataAccessor();
// module.exports = subjectDataAccessor;
module.exports = SUBJECT;