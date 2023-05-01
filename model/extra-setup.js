const { sequelize } = require("./sequelize");
class Connections {
    applyExtraSetup = () => {
        const { city, field, user, job, employer, subject, userjobs, logIn } = sequelize.models;
        
        job.belongsTo(employer, { foreignKey: "employerId", as: "employer" });
        employer.hasMany(job, { foreignKey: "employerId", as: "job" });

        user.belongsTo(logIn, { foreignKey: "email", as: "login" });
        logIn.hasOne(user, { foreignKey: "email", as: "user" });

        employer.belongsTo(logIn, { foreignKey: "email", as: "login" });
        logIn.hasOne(employer, { foreignKey: "email", as: "employer" });

        city.hasMany(job, { foreignKey: "idCity", as: "job" });
        job.belongsTo(city, { foreignKey: "idCity", as: "city" });

        field.hasMany(job, { foreignKey: "idField", as: "job" });
        job.belongsTo(field, { foreignKey: "idField", as: "field" });

        subject.hasMany(job, { foreignKey: "idSubject", as: "job" });
        job.belongsTo(subject, { foreignKey: "idSubject", as: "subject" });

        job.belongsToMany(user,{through: userjobs });
        user.belongsToMany(job,{through: userjobs });

    }
}
const connections = new Connections;
module.exports = connections;