const userDal = require("../dal/userAccessor");
const jobDal = require("../dal/jobsAccesor");
//const bcrypt = require('bcrypt');
const verifyJWT = require("../middleware/verifyJWT");
const email = require("../email");
//const valid=require("v")
class UserController {
    getUsers=async(req,res)=>{
        const users=await userDal.getUsers();
        if(users)
            res.status(200).json(users);
        else
            res.send("no users");
    }

    updateDetailes = async (req, res) => {
        const { email, iduser, name, phone, password } = req.body;
        // if (!email || !iduser || !password) {
        //     return res.status(400).json('All fields are required');
        const deleted = await userDal.deleteUser({iduser});
        if (deleted) {
            const created = await userDal.createUser({ email, iduser, name, phone, password });
            if(created)
                res.status(200).json("user updated")
            else
                res.status(400).json("could not update")
        }
    }
    updateJobRequirments = async (req, res) => {
        const { field, subject, city } = req.query;
        const userId = verifyJWT.req;
        const update = await userDal.updateJobRequirments(userId, field, subject, city);
        if (update.modifiedCount == 0)
            res.json(update);
        else {
            const jobList = await jobDal.getJobs(field, subject, city);
            res.json(jobList);
        }
    }
    sendCv = async (req, res) => {
        const employerId = req.query;
        email.sendEmail(employerId, "An employee just for you", req.body.toString());
        res.json("cv sent");
    }
}
const userController = new UserController();
module.exports = userController;