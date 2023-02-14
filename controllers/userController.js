const userDal = require("../dal/userAccessor");
const jobDal = require("../dal/jobsAccesor");
// const db = require('../model/index')
// const User = db.db.users
const bcrypt = require('bcrypt');

class UserController {
    createUser = async (req, res) => {
        const { email, idUser, name, phone, password, field, subject, city, characters } = req.body;
        if (!email || !idUser || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const duplicate = userDal.duplicate(email);
        if (duplicate) {
            return res.status(409).json({ message: "Duplicate username" });
        }
        const hashedPwd = await bcrypt.hash(password, 10);
        const userObject = { email, idUser, name, phone, password: hashedPwd, field, subject, city, characters }
        const user = await userDal.createUser(userObject);
        if (user) { // Created 
            return res.status(201).json({ message: 'New user created' })
        }
        else {
            return res.status(400).json({ message: 'Invalid user data received' })
        }
        //const { idUser, name, password } = req.body
        // if (!idUser) {
        //     return res.status(400).json({ message: 'All fields are required' })
        // }
        // const user=User.create({ idUser, name, password })

        // if (user) { // Created 
        //     return res.status(201).json({ message: 'New user created' })
        // } else {
        //     return res.status(400).json({ message: 'Invalid user data received' })
        //user=="New user created"? res.status(201).json({ message: 'New user created' }):res.status(400).json({ message: 'Invalid user data received' });
    }



    updateDetailes = async (req, res) => {
        const { userId, field, subject, city } = req.body;
        // const update=User.updateOne({"id":userId},{$set:{"field":field,"subject":subject,"city":city}})
        const update = await userDal.updateDetailes(userId, field, subject, city);
        if (update.modifiedCount == 0)
            res.json(update);
        else {
            const jobList = await jobDal.getJobs(field, subject, city);
            res.json(jobList);
        }

        //jobsDal.getJobs({field,subject,city});

    }

}
const userController = new UserController();
module.exports = userController;