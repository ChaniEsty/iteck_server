const db = require('../model/index')
const LogIn = db.db.logIns
const userDal = require("../dal/userAccessor");
const { where } = require('sequelize');
const email = require('../email');

class LogInDataAccessor {
    createLogIn = async (logInDetails) => {
        console.log("in acc", logInDetails.email)
        const logIn = await LogIn.create(logInDetails);
        return logIn;
    }
    duplicate = async (email) => {
        const duplicate = await LogIn.findOne({ where: { email: email } });
        console.log('in dup',duplicate);
        return duplicate;
    }
    newPassword = async (email) => {
        //console.log("in dal email: ",email)
        const password = await LogIn.findOne({ where: { email: email } })
        return password;
    }
    findUser = async (username) => {
        const user = await LogIn.findOne({ where: { email: username } });
        return user;
    }
    delete = async (email) => {
        LogIn.destroy({ where: { email: email } });
    }
}
const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;