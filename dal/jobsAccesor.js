const { where, Op } = require('sequelize');
const CITY = require('../model/city');
//const city = require('../model/city');
const FIELD = require('../model/field');
const db = require('../model/index');
const SUBJECT = require('../model/subject');
//const userDataAccessor = require('../model/user');
const Job = db.db.jobs;
const User = db.db.users;
const City = db.db.citys;
const Subject = db.db.subjects;
const Field = db.db.fields;

class JobsDataAccessor {
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



    //###############################################################
    //Job.belongsToMany()
    // User.belongsToMany(Team, { through: 'users_teams'});
    // Team.belongsToMany(User, { through: 'users_teams'});

    // Folder.belongsToMany(Team, { through: 'teams_folders'});
    // Team.belongsToMany(Folder, { through: 'teams_folders'});
    // You should be able to load everything in one go using nested includes:

    // User.findAll({
    //   include: [
    //     {
    //       model: Team, 
    //       include: [
    //         Folder
    //       ]  
    //     }
    //   ]
    // });
    //###############################################################
    //     let where ={}
    // if(cateogry_id) where.cateogry_id= cateogry_id
    // if(author_id) where.author_id= author_id
    // if(q) where.name= { [Op.like]:`%${q}%` }
    getJobs = async (field, subject, city) => {
        let where = {};

        const fields = field ? field.split(",") : null;
        const subjects = subject ? subject.split(",") : null;
        const cities = city ? city.split(",") : null;
        if (fields) where.field = { $in: fields };
        if (subjects) where.subject = { $in: subjects };
        if (cities) where.city = { $in: cities };
//attributes: {
//exclude: ['createdAt', 'updatedAt']
// },
        const jobs = await Job.findAll({
            attributes:{exclude:['idCity','idSubject','idField']},
            include: [
                { model: CITY, as: "city", attributes: ["name"] },
                { model: FIELD, as: 'field', attributes: ['name'] },
                { model: SUBJECT, as: 'subject', attributes: ['name'] }],
            where: { [Op.and]: where }
        });
        // const idCities= City.findAll({where:{"city":{$in:cities}}}).id;
        // const idSubjects= Subject.findAll({where:{"subject":{$in:subjects}}}).id;
        // const idFields= Field.findAll({where:{"field":{$in:fields}}}).id;
        //const jobList = Job.findAll({ where: { field: { $in: idFields }, subject: { $in: idSubjects }, city: { $in: idCities } } })
       // return jobList;
       return jobs;
    }
    createJob = async (jobDetailes) => {

        console.log("in create job");
        const job = Job.create(jobDetailes);
        return job;
        // if (job) { // Created 
        //     userList=await User.findAll({"$or":[{field:{"$regex":Field}},{field:""}],"$or":[{subject:{"$regex":subject}},{subject:""}],"$or":[{city:{"$regex":city}},{city:""}]})
        //     if(userList!="no documents found")
        //         userList.forEach(element => {
        //             //send email

        //     });
        //     return 'New job created';
        // } else {
        //     return 'Invalid job data received';
        // }
    }
    deleteJob = async (id) => {
        const job = await Job.destroy({ where: { idjob: id } });
        console.log(job);
        return job;

    }
    getJobById = async (id) => {
        const job = Job.findOne({ where: { idjob: id } });
        return job;
    }
}


const jobsDataAccessor = new JobsDataAccessor();
module.exports = jobsDataAccessor;