// const db = require('../model/index')
// const Employer = db.db.employers
const employerDal = require("../dal/employerAccessor");

class EmployerController {
    createEmployer=async(req,res)=> {
        const employer=employerDal.createEmployer(req.body);
        employer=="New employer created"? res.status(201).json({ message: 'New employer created' }): res.status(400).json({ message: 'Invalid employer data received' })
        //const { idUser, name, password } = req.body
        // if (!idUser) {
        //     return res.status(400).json({ message: 'All fields are required' })
        // }
        // const user=Employer.create({ idUser, name, password })

        // if (user) { // Created 
        //     return res.status(201).json({ message: 'New user created' })
        // } else {
        //     return res.status(400).json({ message: 'Invalid user data received' })
        // }

        
    }
    getJobs=async(req,res)=>{
        
    }

    
}
const employerController = new EmployerController();
module.exports = employerController;