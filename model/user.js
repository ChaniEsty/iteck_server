const sequle=require("./index")
class UserDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const USER = sequle.sequelize.define(
            "user",
            {
                email: {
                type: DataType.STRING,
                allowNull: false,
                primaryKey:true
                },
                idUser: {
                    type: DataType.STRING,
                    allowNull: false,
                },
                name: {
                    type: DataType.STRING,
                },
                phone: {
                    type: DataType.STRING,
                },
                password: {
                    type: DataType.STRING,
                    allowNull: false,
                },
                field: {
                    type: DataType.STRING,
                },
                subject: {
                    type: DataType.STRING,
                },
                city: {
                    type: DataType.STRING,
                },
                charecters: {
                    type: DataType.STRING,
                },
            },
            {
            timestamps: false,
            }
        );
    
    }
   
    }
  
const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;