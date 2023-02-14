// const sequle=require("./index")
// class UserjobsDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
const USERJOBS = sequelize.define(
    "userjobs",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idJob: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        timestamps: false,
    }
);
// return USERJOBS;
// }

// }

// const userjobsDataAccessor = new UserjobsDataAccessor();
// module.exports = userjobsDataAccessor;
module.exports = USERJOBS;