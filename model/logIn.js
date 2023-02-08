const sequle=require("./index")
class LogInDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const LOGIN = sequle.sequelize.define(
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
    
    }
   
    }
  
const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;