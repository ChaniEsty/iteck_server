//const sequle=require("./index")
module.exports = (sequelize, DataType) => {
//class CityDataAccessor{
    //constructor() {
        //const DataType=sequle.DataTypes;
        const CITY = sequelize.define(
            "city",
            {
                idCity: {
                    primaryKey:true,
                    type: DataType.INTEGER,
                    allowNull: false,
                    autoIncrement:true},
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