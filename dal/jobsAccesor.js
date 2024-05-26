const CITY = require('../model/city');
const FIELD = require('../model/field');
const db = require('../model/index');
const SUBJECT = require('../model/subject');
const Job = db.db.jobs;
const User = db.db.users;
const JOB = require('../model/job');
class JobsDataAccessor {
    // getJobs = async (field, subject, city) => {

    getJobs = async (field, subject, city, character) => {
        console.log(field, subject, city, character, "ddddddddddddddddddddddd")
        console.log('getJobs DAL ');
        let whereCity = {};
        let whereField = {};
        let whereSubject = {};
        let whereCharacter = {};
        const fields = (field == "undefined") || (field == "null") || (field == "") ? null : field.split(",");
        const subjects = (subject == "undefined") || (subject == "null") || (subject == "") ? null : subject.split(",");
        const cities = (city == "undefined") || (city == "null") || (city == "") ? null : city.split(",");
        if (fields) whereField = { name: fields };
        if (subjects) whereSubject = { name: subjects };
        if (cities) whereCity = { name: cities };
        // if (character) whereCharacter = { neededCharacters: character};
        const j = await Job.findOne({
            where: {
        idSubject: '14'
            }
        })
        console.log(JSON.parse(character))
        console.log(j.neededCharacters)
        const jobs = await Job.findAll({
            attributes: { exclude: ['idCity', 'idSubject', 'idField'] },
            include: [
                { model: CITY, as: "city", attributes: ["name"], where: whereCity },
                { model: FIELD, as: 'field', attributes: ['name'], where: whereField },
                { model: SUBJECT, as: 'subject', attributes: ['name'], where: whereSubject },
            ],
            where: {
                neededCharacters: JSON.parse(character)
            }
        });
        
        console.log(JSON.stringify(jobs[0]?.neededCharacters), "needed");
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
        console.log('getJobsByUserId');
        const jobs = await User.findOne({
            attributes: ["email"],
            include: [
                {
                    model: JOB, attributes: { exclude: ['idCity', 'idSubject', 'idField'] },
                    include: [
                        { model: CITY, as: "city", attributes: ["name"] },
                        { model: FIELD, as: 'field', attributes: ['name'] },
                        { model: SUBJECT, as: 'subject', attributes: ['name'] }]
                },

            ],
            where: { email: userId }
        });
        return jobs;
    }
}


const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;