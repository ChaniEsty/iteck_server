const userDal = require("../dal/userAccessor");
const jobDal = require("../dal/jobsAccesor");
const email = require("../email");
const validation = require("validator");

class UserController {
    getUsers = async (req, res) => {
        const users = await userDal.getUsers();
        if (users)
            res.status(200).json(users);
        else
            res.status(400).send("no users");
    }
    getUserById = async (req, res) => {
        const id = req.params;
        const user = await userDal.getUserById(id);
        if (user)
            res.status(200).json(user);
        res.status(400).send("no user found");
    }
    updateDetailes = async (req, res) => {
        const id = req.params;
        const { email, iduser, name, phone, password } = req.body;
        if (!email || !iduser || !password)
            return res.status(400).send('All fields are required');
        if (!validation.isEmail(email))
            return res.status(400).send('wrong email');
        if (!validation.idId(iduser))
            return res.status(400).send('wrong id');
        if (!validation.isPhone(phone))
            return res.status(400).send('wrong phone number');
        const updated = await userDal.updateDetailes(id, { email, iduser, name, phone, password });
        if (updated)
            res.status(200).send("user updated");
        else
            res.status(400).send("could not update");
    }
    updateJobRequirments = async (req, res) => {
        const { field, subject, city } = req.query;
        const userId = req.user.email;
        const update = await userDal.updateJobRequirments(userId, field, subject, city);
        if (update.modifiedCount == 0)
            res.json(update);
        else {
            const jobList = await jobDal.getJobs(field, subject, city);
            userDal.deleteUserJobs(userId);
            jobList.forEach(async job => {
                await userDal.addJobToUser(job.id, userId);
            });
        }
    }
   
    sendCv = async (req, res) => {
        const employerEmail = req.query.empId;
        if (!validation.isEmail(employerEmail))
            res.send("wrong email");
        else {
            email.sendEmail(employerEmail, "An employee just for you", req.body.toString());
            res.send("cv sent");
        }
    }
}
const userController = new UserController();
module.exports = userController;