// const { where } = require("sequelize");
// const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const User = db.db.users;
const UserJobs = db.db.usersjobs;

const { Op } = require("sequelize");
class UserDataAccessor {

  createUser = async (userDetails) => {
    const user = await User.create(userDetails);
    return user;
  }
  deleteUser = async (idUserToDelete) => {
    const destroyed = await User.destroy({ where: { id: idUserToDelete } });
    return destroyed;
  }
  updateDetailes = async (id, userToUpdate) => {
    const { email, iduser, name, phone, password } = userToUpdate;
    const update = await User.updateOne({ where: { id: id } }, { $set: { email: email, iduser: iduser, name: name, phone: phone, password: password } });
    return update;
  }
  updateJobRequirments = async (userId, field, subject, city) => {
    console.log(userId+"userId22222222222222222222222222222222222");
    const update = await User.update({ field: field, subject: subject, city: city }, { where: { email: userId } });
    return update;
  }
  deleteUserJobs=async(userId)=>{
    UserJobs.destroy({where:{userEmail:userId}})
  }
  addJobToUser = async (jobId, userEmail) => {
    console.log("adding job66666666666666666666666666666666666666");
    return await UserJobs.create({ jobId, userEmail });
  }
  getUsers = async () => {
    const users = User.findAll();
    return users;
  }
  getUserById=async(id)=>{
    const user=User.findOne({where:{userEmail:id}});
    return user;
  }

  getUsersAccordingToJob = async (field, subject, city) => {
    const userList = await User.findAll({
      where:
      {
        [Op.and]: [{
          [Op.or]: [{ field: { [Op.like]: `%${field}%` } }, { field: "" }]
        },
        {
          [Op.or]: [{ subject: { [Op.like]: `%${subject}%` } }, { subject: "" }]
        },
        { [Op.or]: [{ city: { [Op.like]: `%${city}%` } }, { city: "" }] }
        ]
      }
    });
    return userList;
  }
}

const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;