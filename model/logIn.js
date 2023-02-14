// const sequle=require("./index")
// class LogInDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
        const LOGIN = sequelize.define(
            "logIn",
            {
                email: {
                primaryKey:true,
                type: DataTypes.STRING,
                allowNull: false,
                },
                password: {
                    type: DataTypes.STRING,
                    allowNull:false
                },
                
            },
            {
            timestamps: false,
            }
        );
    // return LOGIN;
    // }
   
//     }
// const logInDataAccessor = new LogInDataAccessor();
// module.exports = logInDataAccessor;
module.exports = LOGIN;