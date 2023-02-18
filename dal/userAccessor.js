const { where } = require("sequelize");
const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const User = db.db.users
const { Op } = require("sequelize");
class UserDataAccessor {
 
  createUser = async (userDetails) => {
    console.log("in create user");
    const user = await User.create(userDetails);
    return user;
   
  }

  updateDetailes = async (userId, field, subject, city) => {
    const update = await User.updateOne({ where: { id: userId } }, { $set: { "field": field, "subject": subject, "city": city } });
    return update;
  }
  
  getUsers = async (field, subject, city) => {
    const userList = await User.findAll({
      where:
      {
        [Op.and]: [{
          [Op.or]: [{ field: { [Op.like]: `%${field}%` }}, {field: "" }]
        },
        {
          [Op.or]: [{ subject: { [Op.like]: `%${subject}%` }},{ subject: "" }]
        },
        { [Op.or]: [{ city: { [Op.like]: `%${city}%` }}, {city: "" }] }
        ]
      }
    });
    return userList;
  }
}

const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;