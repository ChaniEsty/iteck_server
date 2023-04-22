const jobsDal = require("../dal/jobsAccesor");
const cityDal = require("../dal/cityAccessor");
const subjectDal = require("../dal/subjectAccessor");
const fieldDal = require("../dal/fieldAccessor");
const userDal = require("../dal/userAccessor");
const email = require("../email");

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
      if (!(jobs == null)) {
         const newJobs = await jobs.jobs.map(async (job) => {
            const fieldName = await fieldDal.getFieldById(job.idField);
            const subjectName = await subjectDal.getSubjectById(job.idSubject);
            const cityName = await cityDal.getCityById(job.idCity)
            {
               job.name,
                  job.generalDescription,
                  fieldName,
                  subjectName,
                  cityName
            }
         })
         res.json(newJobs);
      }
      else
         res.json("no jobs")
   }
}
const jobsController = new JobsController();
module.exports = jobsController;