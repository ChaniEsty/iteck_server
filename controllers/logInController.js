// const db = require('../model/index')
// const LogIn = db.db.logIns
const logInDal = require("../dal/logInAccessor");
const userCon = require("../controllers/userController");
class LogInController {

  createLogIn = async (req, res) => {
    const login = await logInDal.createLogIn(req.body);
    if (login == "logIn created") {
      const user = userCon.createUser(req, res);
      if (user != "New user created") {
        logInDal.delete();
        res.status(400).json({ message: user });
      }
      else
        res.status(201).json({ message: user })
    }
    else
      res.status(400).json({ message: login });



    //     const{idJob,name,genralDiscription,field,subject,city,neededCharecters,company,employerId}=req.body

    //     if (!idJob) {
    //         return res.status(400).json({ message: 'All fields are required' })
    //     }
    //     const logIn=LogIn.create({email,password})
    //    if (logIn) { // Created 
    //         return res.status(201).json({ message: 'New logIn created' })
    //     } else {
    //         return res.status(400).json({ message: 'Invalid logIn data received' })
    // "    }
  }
  newPassword = async (req, res) => {
    //console.log("in controller login",req.query.email)
    const password = await logInDal.newPassword(req.query.email);
    console.log("in controller", password);
    res.json(password);
  }
}
const logInController = new LogInController();
module.exports = logInController;
