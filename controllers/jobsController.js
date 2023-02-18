const jobsDal = require("../dal/jobsAccesor");
const cityDal = require("../dal/cityAccessor");
const subjectDal = require("../dal/subjectAccessor");
const fieldDal = require("../dal/fieldAccessor");
const userDal = require("../dal/userAccessor");
const email = require("../email");

class JobsController {
   getJobs = async (req, res) => {
      const { field, subject, city } = req.query;
      const jobList = await jobsDal.getJobs(field, subject, city);
      res.json(jobList);
   }
   createJob = async (req, res) => {
      const { name, genralDiscription, field, subject, city, neededCharacters, company, employerId } = req.body;
      const c = await cityDal.addCity(city);
      console.log("in cj", c);
      const idCity = c.idCity;
      const s = await subjectDal.addSubject(subject);
      const idSubject = s.idSubject;
      const f = await fieldDal.addField(field);
      const idField = f.idField;
      const job = await jobsDal.createJob({ name, genralDiscription, idField, idSubject, idCity, neededCharacters, company, employerId });
      if (job) { // Created 
         const userList = await userDal.getUsers(field, subject, city);
         if (userList)
            console.log(userList, "userList");
         userList.forEach(user => {
            email.sendEmail(user.dataValues.email, job);
         });

         res.status(201).json({ message: 'New job created' })
      }
      else {
         res.status(400).json({ message: 'Invalid job data received' })
      }
   }
   deleteJob = async (req, res) => {
      const jobDelete = await jobsDal.deleteJob(req.params.id);

   }
}
const jobsController = new JobsController();
module.exports = jobsController;