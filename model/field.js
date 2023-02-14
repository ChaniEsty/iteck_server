// const sequle=require("./index")
// class FieldDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
const { sequelize, DataTypes } = require("./sequelize");

// module.exports = (sequelize, DataType) => {
const FIELD = sequelize.define(
    "field",
    {
        idField: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false,
    }
);
// return FIELD;
// }

//     }
// const fieldDataAccessor = new FieldDataAccessor();
// module.exports = fieldDataAccessor;
module.exports = FIELD;