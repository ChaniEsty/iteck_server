// // var mysql      = require('mysql');

// // class UserDataAccessor{
// //   connection = mysql.createConnection({
// //   host     : 'localhost',
// //   user     : 'root',
// //   password : 'password',
// //   database : 'iteck',
  
// // });

// /*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;
// */ 
// // constructor() {
// //     this.init();

// // }

// // init = async () => {
// //     await this.connection.connect(); 
// // }
// //  check=async() => {
// //       this.connection.query(`SELECT * FROM user`, 
// //       function (error, results, fields) {
// //         if (error) throw error;
// //   console.log(results)
// //   });
//    }
//var connect=require("/connection.js")
const { where } = require("sequelize");
const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const User = db.db.users
const {Op}=require("sequelize");
class UserDataAccessor{
//   constructor() {
//     this.connection=connect.connection;
// }
createUser=async(userDetails)=> {
  console.log("in create user");
  
  //console.log({email,idUser,name,phone,password,field,subject,city,characters})
  
  const user=await User.create(userDetails);
  
  if (user) { // Created 
    console.log(user);
    return 'New user created';
  } 
  else {
      return 'Invalid user data received';
  }
}
duplicate=async(email)=>{
  const duplicate = await User.findOne({where:{email:email}});
  return duplicate;
}
updateDetailes=async(userId,field,subject,city)=> {
  const update=await User.updateOne({where:{id:userId}},{$set:{"field":field,"subject":subject,"city":city}});
  if (update.modifiedCount==0)
    return "didn't update";
  else
    return "updated";
  

}
getUsers=async(field,subject,city)=>{
 // User.findAll({where:{[Op.and]:{[Op.or]:{field:field,field:""},[Op.or]:{subject:subject,subject:""}}}})
  const userList=await User.findAll({where:
    {[Op.and]:{ [Op.or]:{field:field,field:""},
      [Op.or]:{subject:subject,subject:""},
      [Op.or]:{city:city,city:""}}
    }});
  return userList;
}
//  createUser=async(userData) => {

//     this.connection.query(`INSERT INTO user (idUsers, name) VALUES (${userData["idUser"]},${userData["name"]})`, 
//     function (error, results, fields) {
//       if (error) throw error;

// });
//  }
//  checkPassword=async(logInData)=>{
//   userId=this.connection.query(`SELECT id FROM user UNION employer  WHERE ${logInData["password"]}=password`, 
//     function (error, results, fields) {
//       if (error) throw error;

// });
//   }
}
//  endConnection(){this.connection.end();}}

const userDataAccessor = new UserDataAccessor();
module.exports = userDataAccessor;