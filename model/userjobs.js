// const sequle=require("./index")
// class UserjobsDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const USERJOBS = sequelize.define(
            "userjobs",
            {
                id: {
                    type: DataType.INTEGER,
                    allowNull: false,
                    primaryKey:true,
                    autoIncrement:true
                },
                idJob: {
                    type: DataType.INTEGER,
                },
                idUser: {
                    type: DataType.INTEGER,
                },
            },
            {
            timestamps: false,
            }
        );
    return USERJOBS;
    }
   
// }
  
// const userjobsDataAccessor = new UserjobsDataAccessor();
// module.exports = userjobsDataAccessor;