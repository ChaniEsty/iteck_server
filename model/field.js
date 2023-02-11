// const sequle=require("./index")
// class FieldDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const FIELD = sequelize.define(
            "field",
            {
                idField: {
                    type: DataType.INT,
                    allowNull: false,
                },
                fieldDiscription: {
                    type: DataType.STRING,
                },
            },
            {
            timestamps: false,
            }
        );
    return FIELD;
    }
   
//     }
// const fieldDataAccessor = new FieldDataAccessor();
// module.exports = fieldDataAccessor;