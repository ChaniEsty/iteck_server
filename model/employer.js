//const sequle=require("./index")
// class EmployerDataAccessor{
//     constructor() {
//const DataType=sequle.DataTypes;
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
const EMPLOYER = sequelize.define(
    "employer",
    {
        email: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false,
        },
        idEmp: {
            type: DataTypes.STRING,
            allowNull: false,
            // unique: true
        },
        name: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },


    },
    {
        timestamps: false,
    }
);
// return EMPLOYER;
// }

//     }

// const employerDataAccessor = new EmployerDataAccessor();
// module.exports = employerDataAccessor;
module.exports = EMPLOYER;