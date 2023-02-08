const db = require('../model/index')
const LogIn = db.db.logIns
const userDal = require("../dal/userAccessor");

class LogInDataAccessor{
    createLogIn=(logInDetails) => {
        const{email,idUser,name,phone,password,field,subject,city,charecters}=logInDetails;
        if (!email|| !idUser|| !password) {
            return 'All fields are required';
        }
        const logIn=LogIn.create({email,password})
       if (logIn) { // Created 
            const user=userDal.createUser({email,idUser,name,phone,password,field,subject,city,charecters})
            if(user!="New user created"){
                LogIn.delete({"email":email});
            }
            return user;
        } 
        else 
        {
            return 'Invalid logIn data received';
        }
        
    }       
}

const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;