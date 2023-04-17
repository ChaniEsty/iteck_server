const { where, Op } = require('sequelize');
const { USER } = require('../config/dbConfig');
const CITY = require('../model/city');
const FIELD = require('../model/field');
const db = require('../model/index');
const SUBJECT = require('../model/subject');
const USERJOBS = require('../model/userjobs');
const Job = db.db.jobs;
const UserJob = db.db.usersjobs;

class JobsDataAccessor {

    getJobs = async (field, subject, city) => {
        let where = {};

        const fields = field ? field.split(",") : null;
        const subjects = subject ? subject.split(",") : null;
        const cities = city ? city.split(",") : null;
        if (fields) where.field = { $in: fields };
        if (subjects) where.subject = { $in: subjects };
        if (cities) where.city = { $in: cities };

        const jobs = await Job.findAll({
            attributes: { exclude: ['idCity', 'idSubject', 'idField'] },
            include: [
                { model: CITY, as: "city", attributes: ["name"] },
                { model: FIELD, as: 'field', attributes: ['name'] },
                { model: SUBJECT, as: 'subject', attributes: ['name'] }],
            where: { [Op.and]: where }
        });
        return jobs;
    }
    createJob = async (jobDetailes) => {
        const job = Job.create(jobDetailes);
        return job;
    }
    deleteJob = async (id) => {
        const job = await Job.destroy({ where: { idjob: id } });
        console.log(job);
        return job;

    }
    getJobById = async (id) => {
        const job = Job.findOne({ where: { idjob: id } });
        return job;
    }
    getJobsByUserId = async (userId) => {

        // const idJobs=UserJob.findAll({where:{idUser:userId}}).idJob;
        const jobs = await Job.findAll({
           
            include: [
                { model: USER, as: "user", attributes: ["jobId"] }
            ],
            where: { userEmail: userId }
        });
    }
}


const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;