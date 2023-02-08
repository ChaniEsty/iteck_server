const sequle=require("./index")
class EmployerDataAccessor{
    constructor() {
        const DataType=sequle.DataTypes;
        const EMPLOYER = sequle.sequelize.define(
            "employer",
            {
                email: {
                type: DataType.STRING,
                allowNull: false,
                },
                idEmp: {
                    type: DataType.STRING,
                    allowNull: false,
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
    
    }
   
    }
  
const employerDataAccessor = new EmployerDataAccessor();
module.exports = employerDataAccessor;