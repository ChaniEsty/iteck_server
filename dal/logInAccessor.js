const db = require('../model/index')
const LogIn = db.db.logIns
const userDal = require("../dal/userAccessor");

class LogInDataAccessor{
    createLogIn=(logInDetails) => {
        const{email,idUser,name,phone,password,field,subject,city,characters}=logInDetails;
        if (!email|| !idUser|| !password) {
            return 'All fields are required';
        }
        else
        {
            const logIn=LogIn.create({email,password})
            
            if (logIn) { // Created
                console.log("i managed"+logIn); 
                const user=userDal.createUser({email,idUser,name,phone,password,field,subject,city,characters})
                if(user!="New user created")
                {
                    LogIn.deleteOne({"email":email});
                    return user;
                }
                else
                    return user;
            } 
            else 
            {
                return 'Invalid logIn data received';
            }
        }
    }  
    newPassword=(email)=>{
       const password=LogIn.find({"email":email});
       if(password)
            return password.password;
       else
            return "wrong email";
    }     
}
const logInDataAccessor = new LogInDataAccessor();
module.exports = logInDataAccessor;