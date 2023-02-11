// const sequle=require("./index")
// class LogInDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const LOGIN = sequelize.define(
            "logIn",
            {
                email: {
                type: DataType.STRING,
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
    return LOGIN;
    }
   
//     }
// const logInDataAccessor = new LogInDataAccessor();
// module.exports = logInDataAccessor;