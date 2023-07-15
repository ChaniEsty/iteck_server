const db = require('../model/index')
const Employer = db.db.employers
const Job=db.db.jobs;
class EmployerDataAccessor {
    createEmployer = async (employerDetails) => {
        const employer = await Employer.create(employerDetails);
        return employer;
    }
    getJobsById = async (email) => {
        const jobs = await Job.findAll({ where: { email: email } });
        return jobs;
    }
    update=async(email,password)=>{
        return await Employer.update({ password:password},{ where: { email: email }});
    }
}
const employerDataAccessor = new EmployerDataAccessor();
module.exports = employerDataAccessor;

