// const sequle=require("./index")
// class FieldDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const FIELD = sequelize.define(
            "field",
            {
                idField: {
                    primaryKey:true,
                    type: DataType.INTEGER,
                    allowNull: false,
                    autoIncrement:true
                },
                name: {
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