const db = require('../model/index')
const User = db.db.users

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
    updateDetailes=async(req,res)=> {
        const {userId,field,subject,city}=req.body;
        const jobList=User.updateOne({"id":userId},{$set:{"field":field,"subject":subject,"city":city}})
        res.send(jobList);

    }
    
}
const userController = new UserController();
module.exports = userController;