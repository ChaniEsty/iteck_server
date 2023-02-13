//const sequle=require("./index")
// class EmployerDataAccessor{
//     constructor() {
        //const DataType=sequle.DataTypes;
        module.exports = (sequelize, DataType) => {
        const EMPLOYER = sequelize.define(
            "employer",
            {
                email: {
                primaryKey:true,
                type: DataType.STRING,
                allowNull: false,
                },
                idEmp: {
                    type: DataType.STRING,
                    allowNull: false,
                    unique:true
                },
                name: {
                    type: DataType.STRING,
                },
                phone: {
                    type: DataType.STRING,
                },
                password: {
                    type: DataType.STRING,
                    allowNull: false,
                },
                
                
            },
            {
            timestamps: false,
            }
        );
    return EMPLOYER;
    }
   
//     }
  
// const employerDataAccessor = new EmployerDataAccessor();
// module.exports = employerDataAccessor;