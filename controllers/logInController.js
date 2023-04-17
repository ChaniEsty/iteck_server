const logInDal = require("../dal/logInAccessor");
const userDal = require("../dal/userAccessor");
const employerDal = require("../dal/employerAccessor");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validation = require("validator");
const email = require("../email");
class LogInController {
  logIn = async (req, res) => {
    debugger;
    const { signInEmail, signInPassword } = req.body;
    if (!signInEmail || !signInPassword) {
      return res.status(400).json({
        message: 'All fields are required'
      })
    }
    // if (!validation.email(signInEmail))
    //   return res.status(400).json({
    //     message: 'wrong input'
    //   })

    const foundUser = await logInDal.findUser(signInEmail);
    if (!foundUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const match = await bcrypt.compare(signInPassword, foundUser.password);
    if (!match) return res.status(401).json({ message: 'Unauthorized' });
    const userInfo = {
      email: foundUser.email, iduser: foundUser.iduser, name: foundUser.name, phone: foundUser.phone, password: foundUser.password, field: foundUser.field
      , subject: foundUser.subject, city: foundUser.city, characters: foundUser.characters
    }
    const accessToken = jwt.sign(userInfo, process.env.JWT_PASSWORD);
    res.send({ accessToken: accessToken });
  }
  createLogIn = async (req, res) => {
    debugger;
    const { email, iduser, name, phone, password, role } = req.body;
    if (!email || !iduser || !password)
    {console.log("testing")
      return res.status(400).json('All fields are required');}
    // if (!validation.email(email))
    //   return res.status(400).send('wrong email');
    // if (!validation.id(iduser))
    //   return res.status(400).send('wrong id');
    // if (!validation.phone(phone))
    //   return res.status(400).send('wrong phone number');
    else {
      console.log(req.body);
      console.log(role);
      const duplicate = await logInDal.findUser(email);
      if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" });
      }
      else {
        const hashedPwd = await bcrypt.hash(password, 10);
        const loginObject = { email, password: hashedPwd };
        const login = await logInDal.createLogIn(loginObject);
        if (login) { // Created
          if (role == 'employer') {
            const empObject = { email, idEmp: iduser, name, phone, password: hashedPwd };
            const employer = await employerDal.createEmployer(empObject);
            if (!employer) {
              logInDal.delete(email);
              res.status(400).json('Invalid employer data received');
            }
            else{
              res.status(200).json("employer added");
              // this.logIn(req, res);
            }
          }
          else {
            const userObject = { email, iduser, name, phone, password: hashedPwd };
            const user = await userDal.createUser(userObject);
            if (!user) {
              logInDal.delete(email);
              res.status(400).json('Invalid user data received');
            }
            else{
              res.status(200).json("user added");
              // this.logIn(req, res);
            }
          }
        }
        else {
          res.status(400).json('Invalid logIn data received');
        }
      }
    }
  }
  newPassword = async (req, res) => {
    //console.log(req);
    const signInEmail = req.params.id;
    console.log(signInEmail,"checking password");
    if (!signInEmail)
      res.statuse(400).send("no email");
    if (!validation.isEmail(signInEmail))
      return res.status(400).send('wrong email');
    const password = await logInDal.findUser(signInEmail);
    if (password) {
      const newPassword = require('crypto').randomBytes(64).toString('hex');
      console.log(newPassword);
      email.sendEmail(signInEmail, "new password", newPassword);
      res.json("new password has been sent");
    }
    else
      res.status(400).json("can't create password try again");
  }

}
const logInController = new LogInController();
module.exports = logInController;
