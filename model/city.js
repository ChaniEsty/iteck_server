const sequle=require("./index")
class CityDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const CITY = sequle.sequelize.define(
            "city",
            {
                idCity: {
                    type: DataType.INT,
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
  
const cityDataAccessor = new CityDataAccessor();
module.exports = cityDataAccessor;