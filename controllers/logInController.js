const db = require('../model/index')
const LogIn = db.db.logIns

class LogInController {

    createLogIn=async(req,res) => {
        const{idJob,name,genralDiscription,field,subject,city,neededCharecters,company,employerId}=req.body
        if (!idJob) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const logIn=LogIn.create({email,password})
       if (logIn) { // Created 
            return res.status(201).json({ message: 'New logIn created' })
        } else {
            return res.status(400).json({ message: 'Invalid logIn data received' })
        }
        
     
        }                                                                                                         
}
const logInController = new LogInController();
module.exports = logInController;