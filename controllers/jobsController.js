const jobsDal = require("../dal/jobsAccesor");
const cityDal = require("../dal/cityAccessor");
const subjectDal = require("../dal/subjectAccessor");
const fieldDal = require("../dal/fieldAccessor");
const userDal = require("../dal/userAccessor");
const email = require("../email");
// const db = require('../model/index')
// const User = db.db.users;
class JobsController {
   getJobs = async (req, res) => {
      console.log("in get jobs");
      const { fields, subjects, cities } = req.query;
      const jobList = await jobsDal.getJobs(fields, subjects, cities);
      //const newJobs=await this.getNameOfId(jobList);
      console.log(jobList,"33333333333333333333333333333");
      res.json(jobList);
   }
   createJob = async (req, res) => {
      const { name, genralDescription, field, subject, city, neededCharacters, company } = req.body;
      const employerId = req.user.email;
      const c = await cityDal.addCity(city);
      const idCity = c.idCity;
      const s = await subjectDal.addSubject(subject);
      const idSubject = s.idSubject;
      const f = await fieldDal.addField(field);
      const idField = f.idField;
      const job = await jobsDal.createJob({ name, genralDescription, idField, idSubject, idCity, neededCharacters, company, employerId });
      if (job) { // Created 
         const userList = await userDal.getUsersAccordingToJob(field, subject, city);
         if (userList)
            userList.forEach(user => {
               email.sendEmail(user.dataValues.email, "A new job just for you", job.dataValues.toString());
            });

         res.status(201).json({ message: 'New job created' })
      }
      else {
         res.status(400).json({ message: 'Invalid job data received' })
      }
   }
   deleteJob = async (req, res) => {
      await jobsDal.deleteJob(req.params.id);
      res.send("job deleted");
   }
   // getNameOfId=async(jobs)=>{
      // const newJ=await Promise.all( jobs.map(async job =>{
      //    return{
      //       name:job.name,
      //       genralDescription:job.genralDescription,
      //       field:await fieldDal.getFieldById(job.idField),
      //       subject:await subjectDal.getSubjectById(job.idSubject),
      //       city:await cityDal.getCityById(job.idCity)
      //    }}));
      //    return newJ;
   // }
   getJobsByUserId = async (req, res) => {
      console.log("in get jobs by user id");
      const jobs = await jobsDal.getJobsByUserId(req.params.id);
      if (!(jobs == null)) {
         // const newJ=await Promise.all( jobs.jobs.map(async job =>{
         //    return{
         //       name:job.name,
         //       genralDescription:job.genralDescription,
         //       field:await fieldDal.getFieldById(job.idField),
         //       subject:await subjectDal.getSubjectById(job.idSubject),
         //       city:await cityDal.getCityById(job.idCity)
         //    }}));
        // const newJobs=await getNameOfId(["jobs.jobs"]);
         res.json(jobs);
      }
      else
         res.json("no jobs")
   }
}
const jobsController = new JobsController();
module.exports = jobsController;