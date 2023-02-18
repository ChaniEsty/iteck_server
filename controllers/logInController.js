const logInDal = require("../dal/logInAccessor");
const userDal = require("../dal/userAccessor");
const employerDal = require("../dal/employerAccessor");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    const userInfo = {
      email: foundUser.email, iduser: foundUser.iduser, name: foundUser.name, phone: foundUser.phone, password: foundUser.password, field: foundUser.field
      , subject: foundUser.subject, city: foundUser.city, characters: foundUser.characters
    }
    const accessToken = jwt.sign(userInfo, process.env.JWT_PASSWORD);
    res.json({ accessToken: accessToken });
  }
  createLogIn = async (req, res) => {
    const { email, iduser, name, phone, password,role } = req.body;
    console.log(email, iduser, password);
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
        const loginObject = { email, password: hashedPwd };
        const login = await logInDal.createLogIn(loginObject);
        if (login) { // Created
          if (role == 'employer')
           {const empObject={email, idEmp:iduser, name, phone, password:hashedPwd};
            const employer = await employerDal.createEmployer(empObject); 
            if (!employer) {
                logInDal.delete(email);
                res.status(400).json('Invalid employer data received');
            }
            else
              this.logIn(req,res);
          }
          else{
            const userObject={email,iduser, name, phone, password:hashedPwd};
            const user = await userDal.createUser(userObject);
            if (!user) {
              logInDal.delete(email);
              res.status(400).json('Invalid user data received');
            }
            else
              this.logIn(req,res);
          }
        }
        else {
          res.status(400).json('Invalid logIn data received');
        }
      }
    }
  }
  newPassword = async (req, res) => {
    const password = await logInDal.newPassword(req.query.email);
    if (password) {
      console.log("password", password)
      const newPassword = require('crypto').randomBytes(4).toString('hex');
      res.json(newPassword);

    }
    else
      return "wrong email";
  }
 
}
const logInController = new LogInController();
module.exports = logInController;
