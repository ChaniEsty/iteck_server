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
      const { fields, subjects, cities } = req.query;
      const jobList = await jobsDal.getJobs(fields, subjects, cities);
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
   getJobsByUserId = async (req, res) => {
      const jobs = await jobsDal.getJobsByUserId(req.params.id);
      // console.log(jobs.jobs,"dgj");
      // jobs.map((job)=>{
      //    const fieldName=fieldDal.getFieldById(job.field);
      //    const subjectName=subjectDal.getSubjectById(job.subject);
      //    const cityName=cityDal.getCityById(job.city);
      //    const newJob={{job.name},{job.genralDescription},fieldName,subjectName,cityName};
      // })
      console.log(jobs.jobs,"11111111111111111");
      if (!(jobs == null)) {
         const newJobs = jobs.jobs.map(async (job) => {
            // const field = await fieldDal.getFieldById(job.idField);
            // const subject = await subjectDal.getSubjectById(job.idSubject);
            // const city = await cityDal.getCityById(job.idCity)
            // console.log( "riki i dont belive",job.name,
            //    job.genralDescription,
            //    field.name,
            //    subject.name,
            //    city.name);
            return({
                  name:job.name,
                  generalDescription:job.genralDescription,
                  fieldName:await fieldDal.getFieldById(job.idField).name,
                  subjectName:await subjectDal.getSubjectById(job.idSubject).name,
                  cityName:await cityDal.getCityById(job.idCity).name
            })
         })
         const newJ=await Promise.all( jobs.jobs.map(async job=>({
                  name:job.name,
                  generalDescription:job.genralDescription,
                  fieldName:await fieldDal.getFieldById(job.idField).name,
                  subjectName:await subjectDal.getSubjectById(job.idSubject).name,
                  cityName:await cityDal.getCityById(job.idCity).name
         })));
         // const newJobs=await User.findAll();
         console.log(newJ);
         await res.json(newJ);
      }
      else
         res.json("no jobs")
   }
}
const jobsController = new JobsController();
module.exports = jobsController;