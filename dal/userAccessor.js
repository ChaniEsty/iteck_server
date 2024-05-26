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
  updateDetailes = async (email, userToUpdate) => {
    const { name, phone, password } = userToUpdate;
    const update = await User.updateOne({ where: { email: email } }, { $set: {  name: name, phone: phone, password: password } });
    return update;
  }
  updatePassword=async(email,password)=>{
    return await User.update({ password:password},{ where: { email: email }});
}
  updateJobRequirments = async (email, field, subject, city, character) => {
    const update = await User.update({ field: field, subject: subject, city: city,characters:character }, { where: { email: email } });
    return update;
  }
  deleteUserJobs=async(userId)=>{
    UserJobs.destroy({where:{userEmail:userId}})
  }
  addJobToUser = async (jobId, userEmail) => {
    return await UserJobs.create({ jobId, userEmail });
  }
  getUsers = async () => {
    const users = User.findAll();
    return users;
  }
  getUserById=async(id)=>{
    const user=User.findOne({where:{email:id}});
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
  getCharacter =async (email) =>{
    console.log("getCharacter");
    return await User.findOne({attributes: ['characters'],where:{ email: email}});
  }
  // updateUserPersonality=async(email,personality)=>{
  //   await User.update({characters:personality},{where: {email: email}});
  //   console.log("updated succesfully");
  // }

}

const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;