const city = require('../model/city');
const db = require('../model/index');
//const userDataAccessor = require('../model/user');
const Job = db.db.jobs;
const User=db.db.users;
const City=db.db.citys;
const Subject=db.db.subjects;
const Field=db.db.fields;

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
//User.hasMany(Invoice);
//Invoice.belongsTo(User);
//const users = await User.findAll({ include: Invoice });
//console.log(JSON.stringify(users, null, 2));

    getJobs=(jobsData) => {
        const {field,subject,city}=jobsData;
        const fields= field? field.split(","):[];
        const subjects= subject? subject.split(","):[];
        const cities= city? city.split(","):[];
        // City.hasMany(Job);
        // Job.belongsTo(City)
        // const idCities= City.find({"city":{$in:cities}},{name=0,id=1})
        //const idSubjects= Subject.find({"subject":{$in:subjects}},{name=0,id=1})
        ///const idFields= Field.find({"field":{$in:fields}},{name=0,id=1})
       // const jobList=Job.find({"field":{$in:idFields}},{"subject":{$in:idSubjects}},{"city":{$in:idCities}})
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