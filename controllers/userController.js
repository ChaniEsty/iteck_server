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
        console.log("update details");
        const email = req.params;
        const {name, phone, password } = req.body;
        if (!password)
            return res.status(400).send('All fields are required');
        if (!validation.isEmail(email))
            return res.status(400).send('wrong email');
        if (!validation.isPhone(phone))
            return res.status(400).send('wrong phone number');
        const hashedPwd = await bcrypt.hash(password, 10);

        const updated = await userDal.updateDetailes(email, {name, phone, hashedPwd });
        if (updated)
            res.status(200).send("user updated");
        else
            res.status(400).send("could not update");
    }
    updateJobRequirments = async (req, res) => {
        const { field, subject, city } = req.query;
        let character=req.query.character
        if(!character)character=await userDal.getCharacter(req.user.email);
        character=JSON.stringify(character);
        const email = req.user.email;
        console.log(email);
        const update = await userDal.updateJobRequirments(email, field, subject, city, character);
        if (update.modifiedCount == 0)
            res.json(update);
        else {
            const jobList = await jobDal.getJobs(field, subject, city,character);
            await userDal.deleteUserJobs(email);
            jobList.forEach(async job => {
                await userDal.addJobToUser(job.id, email);
            });
        }
    }
   
    sendCv = async (req, res) => {
        console.log(req.body.toString());
        const employerEmail = req.query.empId;
        if (!validation.isEmail(employerEmail))
            res.send("wrong email");
        else {
            email.sendEmail(employerEmail, "An employee just for you", req.body.toString());
            res.send("cv sent");
        }
    } 
    // updateUserPersonality=async(req,res)=>{
    //     const personality = JSON.stringify(req.body);
    //     const email = req.user.email;
    //     userDal.updateUserPersonality(email,personality);

    // }
}
const userController = new UserController();
module.exports = userController;