//const sequle=require("./index");
//const sequelize=sequle.sequelize
const { sequelize } = require("./sequelize");
class Connections{
    applyExtraSetup=()=>{
        const {USER,EMPLOYER,JOB,CITY,FIELD,SUBJECT,LOGIN,USERJOB}=sequelize.models;
        JOB.belongsTo(EMPLOYER,{foreignKey:"employerId",as:"employer"});
        EMPLOYER.hasMany(JOB,{foreignKey:"employerId",as:"job"});
        // JOB.belongsTo(USER,{foreignKey:"employerId",as:"employer"});
        // USER.hasMany(JOB);
        // JOB.hasMany(USER);
        // USER.belongsTo(JOB);
        USER.belongsTo(LOGIN,{foreignKey:"email",as:"login"});
        LOGIN.hasOne(USER,{foreignKey:"email",as:"user"});
        CITY.hasMany(JOB,{foreignKey:"idCity",as:"job"});
        JOB.belongsTo(CITY,{foreignKey:"idCity",as:"city"});
        FIELD.hasMany(JOB,{foreignKey:"idField",as:"job"});
        JOB.belongsTo(FIELD,{foreignKey:"idField",as:"field"});
        SUBJECT.hasMany(JOB,{foreignKey:"idSubject",as:"job"});
        JOB.belongsTo(SUBJECT,{foreignKey:"idSubject",as:"subject"});
    }
}
const connections=new Connections;
module.exports=connections;