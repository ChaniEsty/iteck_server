const db = require('../model/index')
const LogIn = db.db.logIns
const USERS = require('../model/user');
const EMPLOYER = require('../model/employer');

class LogInDataAccessor {
    getLogIns = async () => {
        return await LogIn.findAll();
    }
    createLogIn = async (logIn) => {
        return await LogIn.create(logIn);
    }
    findUser = async (username) => {
        return await LogIn.findOne({ include: [{ model: USERS, as: "user" },{ model: EMPLOYER, as: "employer" }], where: { email: username } });
    }
    delete = async (email) => {
        await LogIn.destroy({ where: { email: email } });
    }
    update=async(email,password)=>{
        return await LogIn.update({ password:password},{ where: { email: email }});
    }
}
const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;