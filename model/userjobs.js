// const sequle=require("./index")
// class UserjobsDataAccessor{
//     constructor() {
//         const DataType=sequle.DataTypes;
module.exports = (sequelize, DataType) => {
        const USERJOBS = sequle.sequelize.define(
            "userjobs",
            {
                id: {
                    type: DataType.INT,
                    allowNull: false,
                },
                idJob: {
                    type: DataType.INT,
                },
                idUser: {
                    type: DataType.INT,
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