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
        const fields = (field=="null") || (field == "") ? null:field.split(",");
        const subjects = (subject=="null") || (subject == "") ? null:subject.split(",");
        const cities = (city=="null") || (city == "")? null:city.split(",");
        console.log(fields, subjects, cities,"after split");
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
    // getJobsByUserId = async (userId) => {

    //     const jobs = await User.findOne({
    //         attributes: ["email"],
    //         include: [
    //             { model: JOB }
    //         ],
    //         where: { email: userId }
    //     });
    //     return jobs;
    // }
    getJobsByUserId = async (userId) => {

        const jobs = await User.findOne({
            // models.products.findAll({
            //     include: [
            //       {model: models.comments, include: [models.comments.users] }
            //     ]
            //   }) 
            attributes: ["email"],
            include: [
                {
                    model: JOB, attributes: { exclude: ['idCity', 'idSubject', 'idField'] },
                    include: [
                        { model: CITY, as: "city", attributes: ["name"] },
                        { model: FIELD, as: 'field', attributes: ['name'] },
                        { model: SUBJECT, as: 'subject', attributes: ['name']}]
                },

            ],
            where: { email: userId }
        });
        return jobs;
    }
}


const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;