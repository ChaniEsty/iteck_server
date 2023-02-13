const jobsDal = require("../dal/jobsAccesor");
const cityDal = require("../dal/cityAccessor");
const subjectDal = require("../dal/subjectAccessor");
const fieldDal = require("../dal/fieldAccessor");
const userDal=require("../dal/userAccessor");
const email=require("../email");
// const db = require('../model/index')
// const Job = db.db.jobs

class JobsController {
     getJobs=async(req,res) => {
        const {field,subject,city}=req.query;
        const jobList=await jobsDal.getJobs(field,subject,city);
         //  const fields,subjects,citys;
        //  field? fields=field.split(","):[];
        //  subject? subjects=subject.split(","):[];
        
        //  city? citys=city.split(","):[];
        //  const jobList=Job.find({"city":{$in:citys},"field":{$in:fields},"subject":{$in:subjects}})
        res.json(jobList);
     }
     createJob=async(req,res) => {
         const{name,genralDiscription,field,subject,city,neededCharacters,company,employerId}=req.body;
         const c=await cityDal.addCity(city);
         console.log("in cj",c);
         const idCity=c.idCity;
         const s=await subjectDal.addSubject(subject);
         const idSubject=s.idSubject;
         const f=await fieldDal.addField(field);
         const idField=f.idField;
         //console.log("in create job",f,s,c);
        const job=await jobsDal.createJob({name,genralDiscription,idField,idSubject,idCity,neededCharacters,company,employerId});
        if (job) { // Created 
            const userList=await userDal.getUsers(field,subject,city);
            if(userList)
               console.log(userList,"userList");
               userList.forEach(user => {
               email.sendEmail(user.dataValues.email,job);
            });
                 
            res.status(201).json({ message: 'New job created' })
         } 
        else {
            res.status(400).json({ message: 'Invalid job data received' })
         }
    //     const{name,genralDiscription,field,subject,city,neededCharecters,company,employerId}=req.body
    //     if (!idJob) {
    //         return res.status(400).json({ message: 'All fields are required' })
    //     }
    //     const job=Job.create({name,genralDiscription,field,subject,city,neededCharecters,company,employerId})
    //    if (job) { // Created 
    //         return res.status(201).json({ message: 'New job created' })
    //     } else {
    //         return res.status(400).json({ message: 'Invalid job data received' })
    //     }
      } 
      deleteJob=async(req,res) =>{
         const jobDelete=jobsDal.deleteJob(req.params.id);
         
      }  
      getJobById=async(req,res)=>{

      }                                                                                                     
}
const jobsController = new JobsController();
module.exports = jobsController;