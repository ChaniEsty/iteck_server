const sequle=require("./index")
class FieldDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const FIELD = sequle.sequelize.define(
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
    
    }
   
    }
  
const fieldDataAccessor = new FieldDataAccessor();
module.exports = fieldDataAccessor;