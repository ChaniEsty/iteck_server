// const db = require('../model/index')
// const Employer = db.db.employers
const employerDal = require("../dal/employerAccessor");
//const bcrypt = require('bcrypt');
class EmployerController {
    // createEmployer = async (employerObject) => {
    //     // const { email, iduser, name, phone, password } = req.body;
    //     // const hashedPwd = await bcrypt.hash(password, 10);
    //     // const employerObject = { email, idEmp:iduser, name, phone, password: hashedPwd };
    //      const employer = employerDal.createEmployer(employerObject);
    //     return employer;
       
        
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
    // }
    getJobs = async (req, res) => {
        const idEmp=req.params;
        console.log("in getjobs",idEmp);
        const jobs=employerDal.getJobs(idEmp.id);
        if(jobs==null)
            res.status(400).json('invalid id');
        else
            res.status(201).json({"jobs":jobs});
    }
}
const employerController = new EmployerController();
module.exports = employerController;