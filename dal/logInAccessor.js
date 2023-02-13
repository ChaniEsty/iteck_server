const db = require('../model/index')
const LogIn = db.db.logIns
const userDal = require("../dal/userAccessor");
const { where } = require('sequelize');

class LogInDataAccessor{
    createLogIn=async(logInDetails) => {
        const{email,idUser,name,phone,password,field,subject,city,characters}=logInDetails;
        if (!email|| !idUser|| !password) {
            return 'All fields are required';
        }
        else
        {
            console.log("in create log");
            const logIn=await LogIn.create({email,password});
            
            if (logIn) { // Created
                return "logIn created";
                //console.log("i managed"+logIn); 
                // const user= await userDal.createUser({email,idUser,name,phone,password,field,subject,city,characters});
                // if(user!="New user created")
                // {
                //     LogIn.destroy({where:{"email":email}});
                //     return user;
                // }
                // else
                //     return user;
            } 
            else 
            {
                return 'Invalid logIn data received';
            }
        }
    }  
    newPassword=async(email)=>{
       //console.log("in dal email: ",email)
       const password=await LogIn.findOne({where:{email:email}})
       if(password){
            console.log("password",password)
            return password.password;

       }
       else
            return "wrong email";
    }     
}
const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;