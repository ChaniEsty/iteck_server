// const sequle=require("./index")
// class LogInDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const LOGIN = sequelize.define(
            "logIn",
            {
                email: {
                primaryKey:true,
                type: DataType.STRING,
                allowNull: false,
                },
                password: {
                    type: DataType.STRING,
                },
                
            },
            {
            timestamps: false,
            }
        );
    return LOGIN;
    }
   
//     }
// const logInDataAccessor = new LogInDataAccessor();
// module.exports = logInDataAccessor;