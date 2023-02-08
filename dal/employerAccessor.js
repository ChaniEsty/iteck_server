const db = require('../model/index')
const Employer = db.db.employers

class EmployerDataAccessor{
    createEmployer=(employerDetails)=> {
        const { idUser, name, password } = employerDetails;
        if (!idUser) {
            return 'All fields are required';
        }
        const employer=Employer.create({ idUser, name, password })

        if (employer) { // Created 
            return 'New user created';
        } else {
            return 'Invalid user data received';
        }}
    }
const employerDataAccessor = new EmployerDataAccessor();
module.exports = employerDataAccessor;

