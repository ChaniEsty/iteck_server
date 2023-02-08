//const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const Job = db.jobs

class JobsController {
    getJobs=async(req,res) => {
        const {city,field,subject}=req.body
        const citys=city.split(",");
        const fields=field.split(",");
        const subjects=subject.split(",");
        const jobList=Job.find({"city":{$in:citys},"field":{$in:fields},"subject":{$in:subjects}})
        res.send(jobList);
        }
}
const jobsController = new JobsController();
module.exports = jobsController;