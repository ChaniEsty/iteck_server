//const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const Job = db.db.jobs

class JobsController {
    getJobs=async(req,res) => {
        const {field,subject,city}=req.body;
        const fields,subjects,citys;
        field? fields=field.split(","):[];
        subject? subjects=subject.split(","):[];
        city? citys=city.split(","):[];
        const jobList=Job.find({"city":{$in:citys},"field":{$in:fields},"subject":{$in:subjects}})
        res.send(jobList);
        }
    createJob=async(req,res) => {
        const{name,genralDiscription,field,subject,city,neededCharecters,company,employerId}=req.body
        if (!idJob) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const job=Job.create({name,genralDiscription,field,subject,city,neededCharecters,company,employerId})
       if (job) { // Created 
            return res.status(201).json({ message: 'New job created' })
        } else {
            return res.status(400).json({ message: 'Invalid job data received' })
        }
        
     
        }                                                                                                         
}
const jobsController = new JobsController();
module.exports = jobsController;