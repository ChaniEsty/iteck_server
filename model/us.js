//const sequle=require("./index")
const { sequelize, DataTypes } = require("./sequelize");

// class UserDataAccessor{
//     constructor() {

const USER = sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        iduser: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
        field: {
            type: DataTypes.TEXT,
        },
        subject: {
            type: DataTypes.TEXT,
        },
        city: {
            type: DataTypes.TEXT,
        },
        characters: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);
// return USER;
// }

//}

// const userDataAccessor = new UserDataAccessor();
//module.exports = userDataAccessor;
module.exports = USER;