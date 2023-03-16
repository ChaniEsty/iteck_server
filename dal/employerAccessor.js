const { where } = require('sequelize');
const db = require('../model/index')
const Employer = db.db.employers
const Job=db.db.jobs;
class EmployerDataAccessor {
    createEmployer = async (employerDetails) => {
        const employer = await Employer.create(employerDetails);
        return employer;
    }
    getJobs = async (id) => {
        const jobs = await Job.findAll({ where: { employerId: id } });
        return jobs;
    }
}
const employerDataAccessor = new EmployerDataAccessor();
module.exports = employerDataAccessor;

