class UserDataAccessor{
    constructor() {
        const USER = sequelize.define(
            "user",
            {
            idUser: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
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