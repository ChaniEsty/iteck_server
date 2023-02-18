const userDal = require("../dal/userAccessor");
const jobDal = require("../dal/jobsAccesor");
const bcrypt = require('bcrypt');

class UserController {

    updateDetailes = async (req, res) => {
        const { userId, field, subject, city } = req.body;
        const update = await userDal.updateDetailes(userId, field, subject, city);
        if (update.modifiedCount == 0)
            res.json(update);
        else {
            const jobList = await jobDal.getJobs(field, subject, city);
            res.json(jobList);
        }
    }
}
const userController = new UserController();
module.exports = userController;