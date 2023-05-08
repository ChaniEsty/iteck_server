const jobsDal = require("../dal/jobsAccesor");
const cityDal = require("../dal/cityAccessor");
const subjectDal = require("../dal/subjectAccessor");
const fieldDal = require("../dal/fieldAccessor");
const userDal = require("../dal/userAccessor");
const email = require("../email");

class JobsController {
   getJobs = async (req, res) => {
      console.log("in get jobs");
      const { fields, subjects, cities } = req.query;
      const jobList = await jobsDal.getJobs(fields, subjects, cities);
      console.log(jobList,"33333333333333333333333333333");
      res.json(jobList);
   }
   createJob = async (req, res) => {
      const { name,generalDescription,requirements,field,subject,city,neededCharacters,company } = req.body;
      console.log(name,generalDescription,requirements,field,subject,city,neededCharacters,company,"tttttttttttttttttttttttttttttttttttt");
      const employerId = req.user.email;
      const c = await cityDal.addCity(city);
      const idCity = c.idCity;
      const s = await subjectDal.addSubject(subject);
      const idSubject = s.idSubject;
      const f = await fieldDal.addField(field);
      const idField = f.idField;
      const job = await jobsDal.createJob({ name, generalDescription,requirements, idField, idSubject, idCity, neededCharacters, company, employerId });
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
      console.log("in get jobs by user id");
      const jobs = await jobsDal.getJobsByUserId(req.params.id);
      if (!(jobs == null)) {
         res.json(jobs);
      }
      else
         res.json("no jobs")
   }
}
const jobsController = new JobsController();
module.exports = jobsController;