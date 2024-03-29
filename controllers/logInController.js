const logInDal = require("../dal/logInAccessor");
const userDal = require("../dal/userAccessor");
const employerDal = require("../dal/employerAccessor");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validation = require("validator");
const email = require("../email");
class LogInController {
  logIn = async (req, res) => {
    const { signInEmail, signInPassword } = req.body;
    if (!signInEmail || !signInPassword) {
      return res.status(400).json({
        message: 'All fields are required'
      })
    }
    if (!validation.isEmail(signInEmail))
      return res.status(400).json({
        message: 'wrong input'
      })

    const foundUser = await logInDal.findUser(signInEmail);
    if (!foundUser) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const match = await bcrypt.compare(signInPassword, foundUser.password);
    if (!match){ console.log("dont match"); return res.status(401).json({ message: 'Unauthorized' });}
    const userInfo = {
      email: foundUser.email, name: foundUser.user ? foundUser.user.name : foundUser.employer.name, phone: foundUser.user ? foundUser.user.phone : foundUser.employer.phone, password: foundUser.password, field: foundUser.user ? foundUser.user.field : null
      , subject: foundUser.user ? foundUser.user.subject : null, city: foundUser.user ? foundUser.user.city : null, characters: foundUser.user ? foundUser.user.characters : null, role: foundUser.user ? "employee" : "employer"
    }

    const accessToken = jwt.sign(userInfo, process.env.JWT_PASSWORD);
    res.send({ accessToken: accessToken, user: userInfo });
  }
  createLogIn = async (req, res) => {
    debugger;
    const { email, name, phone, password, role } = req.body;
    if (!email || !password) { return res.status(400).json('All fields are required'); }
    if (!validation.isEmail(email))
      return res.status(400).send('wrong email');
    if (!validation.isMobilePhone(phone))
      return res.status(400).send('wrong phone number');
    else {
      const duplicate = await logInDal.findUser(email);
      if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" });
      }
      else {
        const hashedPwd = await bcrypt.hash(password, 10);
        const loginObject = { email, password: hashedPwd };
        const login = await logInDal.createLogIn(loginObject);
        if (login) {
          if (role == 'מעסיק') {
            const empObject = { email, name, phone, password: hashedPwd };
            const employer = await employerDal.createEmployer(empObject);
            if (!employer) {
              logInDal.delete(email);
              res.status(400).json('Invalid employer data received');
            }
            else {
              res.status(200).json("employer added");
            }
          }
          else {
            const userObject = { email, name, phone, password: hashedPwd };
            const user = await userDal.createUser(userObject);
            if (!user) {
              logInDal.delete(email);
              res.status(400).json('Invalid user data received');
            }
            else {
              res.status(200).json("user added");
            }
          }
        }
        else {
          res.status(400).json('Invalid logIn data received');
        }
      }
    }
  }
  updatePassword = async (email, password) => {
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = await logInDal.update(email, hashedPwd);
    if (user == 1) {
      console.log('logged in');
      const employee = await userDal.updatePassword(email, hashedPwd);
      if (employee == 0)
        await employerDal.updatePassword(email, hashedPwd);
    }
  }
  newPassword = async (req, res) => {
    const signInEmail = req.params.id;
    if (!signInEmail)
      res.statuse(400).send("no email");
    if (!validation.isEmail(signInEmail))
      return res.status(400).send('wrong email');
    const password = await logInDal.findUser(signInEmail);
    if (password) {
      const newPassword = require('crypto').randomBytes(4).toString('hex');
      email.sendEmail(signInEmail, "new password", newPassword);
      await this.updatePassword(signInEmail, newPassword);
      res.json("new password has been sent");
    }
    else
      res.status(400).json("can't create password try again");
  }

}
const logInController = new LogInController();
module.exports = logInController;
