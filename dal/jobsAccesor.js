const db = require('../model/index');
const userDataAccessor = require('../model/user');
const Job = db.db.jobs;
const User=db.db.users;
class JobsDataAccessor{
//   constructor() {
//       this.init();
//   }
//   init = async () => {
//       await this.connection.connect(); 
//   }
  
//   getJobs=async(JobsData) => {
//   keys=JobsData.keys
//   keys.forEach(element => {
      
//   });
//   //     this.connection.query("SELECT *  FROM jobs  WHERE keys=keys[", function (error, results, fields) {
//   //   if (error) throw error;

//   // });
//   }
  
//   endConnection(){this.connection.end();}

//db.testData.find({ $or: [{ name: /a/ }, { value: { $gt: 5 }}]});
//db.bios.find( { contribs: "UNIX" } )
//db.testData.find({ name: /r/ })
//db.teams.find({
    // team: {
    //     "$regex": "MAN",
    //     "options": "$i"
    //   }
    // })
    //db.bios.find( { birth: { $gt: new Date('1940-01-01'), $lt: new Date('1960-01-01') } } )
    //db.inventory.find( { $or: [ { quantity: { $lt: 20 } }, { price: 10 } ] } )
    getJobs=(jobsData) => {
        const {field,subject,city}=jobsData;
        const fields,subjects,citys;
        field? fields=field.split(","):[];
        subject? subjects=subject.split(","):[];
        city? citys=city.split(","):[];
        const jobList=Job.find({"$or":[{"field":{$in:fields}},{"field":""}],"$or":[{"subject":{$in:subjects}},{"subject":""}],"$or":[{"city":{$in:citys}},{"city":""}]})
        return jobList;
        }
    createJob=(jobDetails) => {
        const{name,genralDiscription,field,subject,city,neededCharecters,company,employerId}=jobDetails
        
        const job=Job.create({name,genralDiscription,field,subject,city,neededCharecters,company,employerId})
        if (job) { // Created 
            userList=User.find({"$or":[{"field":{"$regex":field}},{"field":""}],"$or":[{"subject":{"$regex":subject}},{"subject":""}],"$or":[{"city":{"$regex":city}},{"city":""}]})
            if(userList!="no documents found")
                userList.forEach(element => {
                    //send email
                
            });
            return 'New job created';
        } else {
            return 'Invalid job data received';
        }
        
    
        }                            }

  const jobsDataAccessor = new JobsDataAccessor();
  module.exports = jobsDataAccessor;