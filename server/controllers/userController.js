const db = require('../model/index')
const User = db.users
//const userDal = require("../dal/userAccessor");


class UserController {
    createUser=async(req,res)=> {
        const { idUser, name, password } = req.body
        if (!idUser) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const user=User.create({ idUser, name, password })

        if (user) { // Created 
            return res.status(201).json({ message: 'New user created' })
        } else {
            return res.status(400).json({ message: 'Invalid user data received' })
        }

        
    
    
     }

    // createUser=async(req,res)=>{
    //     var UserData=req.body;
    //     userDal.createUser(UserData);
    //     res.send();
    // }
   
    
}
const userController = new UserController();
module.exports = userController;