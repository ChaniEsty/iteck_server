// const db = require('../model/index')
// const LogIn = db.db.logIns
const logInDal = require("../dal/logInAccessor");
const userCon = require("../controllers/userController");
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');

class LogInController {
  logIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: 'All fields are required'
      })
    }
    const foundUser = await logInDal.findUser(email);
    if (!foundUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const match = await bcrypt.compare(password, foundUser.password);
    if (!match) return res.status(401).json({ message: 'Unauthorized' });
    const userInfo= {email:foundUser.email,iduser:foundUser.iduser,name:foundUser.name,phone:foundUser.phone,password:foundUser.password,field:foundUser.field 
      ,subject:foundUser.subject, city:foundUser.city,characters:foundUser.characters} 
      const accessToken = jwt.sign(userInfo,process.env.JWT_PASSWORD);
      res.json({accessToken:accessToken});
  }
  createLogIn = async (req, res) => {
    const { email, iduser, name, phone, password, field, subject, city, characters } = req.body;
    console.log(email,iduser,password);
    if (!email || !iduser || !password) {
      return res.status(400).json('All fields are required');
    }
    else {
      const duplicate = await logInDal.duplicate(email);
      console.log(duplicate);
      if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" });
      }
      else {
        console.log("in create log");
        const hashedPwd = await bcrypt.hash(password, 10);
        const userObject = { email, password: hashedPwd };
        const login = await logInDal.createLogIn(userObject);
        if (login) { // Created
          const user = await userCon.createUser(req, res);
          if (!user) {
            logInDal.delete(email);
            res.status(400).json('Invalid user data received');
          }
          else
            res.status(201).json("new user created");
        }
        else
        {
          res.status(400).json('Invalid logIn data received');
        }
      }
    }
    
    //console.log("i managed"+logIn); 
    // const user= await userDal.createUser({email,idUser,name,phone,password,field,subject,city,characters});
    // if(user!="New user created")
    // {
    //     LogIn.destroy({where:{"email":email}});
    //     return user;
    // }
    // else
    //     return user;

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
    if (password) {
      console.log("password", password)
      const newPassword = require('crypto').randomBytes(4).toString('hex');
      res.json(newPassword);

    }
    else
      return "wrong email";
  }
  try = () => {
    return "try";

  }
}
const logInController = new LogInController();
module.exports = logInController;
