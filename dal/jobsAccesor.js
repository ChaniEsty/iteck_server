const { where, Op } = require('sequelize');
const { USER } = require('../config/dbConfig');
const CITY = require('../model/city');
const FIELD = require('../model/field');
const db = require('../model/index');
const SUBJECT = require('../model/subject');
const USERJOBS = require('../model/userjobs');
const Job = db.db.jobs;
const User = db.db.users;
const UserJob = db.db.usersjobs;
const USERS = require('../model/user');
const JOB = require('../model/job');
class JobsDataAccessor {

    getJobs = async (field, subject, city) => {
        console.log(field, subject, city);
        let whereCity = {};
        let whereField = {};
        let whereSubject = {};
        const fields = !field && field != "" ? field.split(",") : null;
        const subjects = !subject && subject != "" ? subject.split(",") : null;
        const cities = !city && city != "" ? city.split(",") : null;
        console.log(fields, subjects, cities);
        if (fields) whereField = { name: fields };
        if (subjects) whereSubject = { name: subjects };
        if (cities) whereCity = { name: cities };

        const jobs = await Job.findAll({
            attributes: { exclude: ['idCity', 'idSubject', 'idField'] },
            include: [
                { model: CITY, as: "city", attributes: ["name"], where: whereCity },
                { model: FIELD, as: 'field', attributes: ['name'], where: whereField },
                { model: SUBJECT, as: 'subject', attributes: ['name'], where: whereSubject }
            ]
        });
        return jobs;
    }
    createJob = async (jobDetailes) => {
        const job = Job.create(jobDetailes);
        return job;
    }
    deleteJob = async (id) => {
        const job = await Job.destroy({ where: { idjob: id } });
        return job;

    }
    getJobById = async (id) => {
        const job = Job.findOne({ where: { idjob: id } });
        return job;
    }
    getJobsByUserId = async (userId) => {

        const jobs = await User.findOne({
            attributes: ["email"],
            include: [
                { model: JOB }
            ],
            where: { email: userId }
        });
        return jobs;
    }
}


const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;