//const sequle=require("./index")
module.exports = (sequelize, DataType) => {
//class CityDataAccessor{
    //constructor() {
        //const DataType=sequle.DataTypes;
        const CITY = sequelize.define(
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
        return CITY;
    }
   
   // }
  
// const cityDataAccessor = new CityDataAccessor();
// module.exports = cityDataAccessor;