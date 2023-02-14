//const sequle=require("./index")
const { sequelize, DataTypes } = require("./sequelize");

//module.exports = (sequelize, DataType) => {
//class CityDataAccessor{
    //constructor() {
        //const DataType=sequle.DataTypes;
        const CITY = sequelize.define(
            "city",
            {
                idCity: {
                    primaryKey:true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    autoIncrement:true},
                name: {
                    type: DataTypes.STRING,
                },
            },
            {
            timestamps: false,
            }
        );
    //     return CITY;
    // }
   
   // }
  
// const cityDataAccessor = new CityDataAccessor();
// module.exports = cityDataAccessor;
module.exports = CITY;