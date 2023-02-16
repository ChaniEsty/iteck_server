//const sequle=require("./index");
//const sequelize=sequle.sequelize
const { sequelize } = require("./sequelize");
class Connections {
    applyExtraSetup = () => {
        console.log(sequelize);
        const { city, field, user, job, employer, subject, userjobs, logIn } = sequelize.models;

        //const { USER, EMPLOYER, JOB, CITY, FIELD, SUBJECT, LOGIN, USERJOBS } = sequelize.models;
        //console.log(USER, EMPLOYER, JOB, CITY, FIELD, SUBJECT, LOGIN, USERJOBS);
        job.belongsTo(employer, { foreignKey: "employerId", as: "employer" });
        employer.hasMany(job, { foreignKey: "employerId", as: "job" });
        // JOB.belongsTo(USER,{foreignKey:"employerId",as:"employer"});
        // USER.hasMany(JOB);
        // JOB.hasMany(USER);
        // USER.belongsTo(JOB);
        user.belongsTo(logIn, { foreignKey: "email", as: "login" });
        logIn.hasOne(user, { foreignKey: "email", as: "user" });
        city.hasMany(job, { foreignKey: "idCity", as: "job" });
        job.belongsTo(city, { foreignKey: "idCity", as: "city" });
        field.hasMany(job, { foreignKey: "idField", as: "job" });
        job.belongsTo(field, { foreignKey: "idField", as: "field" });
        subject.hasMany(job, { foreignKey: "idSubject", as: "job" });
        job.belongsTo(subject, { foreignKey: "idSubject", as: "subject" });
    }
}
const connections = new Connections;
module.exports = connections;