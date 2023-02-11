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
const jobsDal = require("../dal/jobsAccesor");
const db = require('../model/index')
const User = db.db.users
class UserDataAccessor{
//   constructor() {
//     this.connection=connect.connection;
// }
createUser=(userDetails)=> {
  const{email,idUser,name,phone,password,field,subject,city,charecters} = userDetails
  const user=User.create({email,idUser,name,phone,password,field,subject,city,charecters})

  if (user) { // Created 
      return 'New user created';
  } 
  else {
      return 'Invalid user data received';
  }

}

updateDetailes=(updateData)=> {
  const {userId,field,subject,city}=updateData;
  const update=User.updateOne({"id":userId},{$set:{"field":field,"subject":subject,"city":city}})
  if (update.modifiedCount==0)
      return "didn't update"
  const jobList=jobsDal.getJobs({field,subject,city});
  return jobList;

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