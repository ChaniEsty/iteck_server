const db = require('../model/index');
const Complaint = db.db.complaintes;

class ComplaintsDataAccessor {
    getcomplaintes(){
        Complaint.find()
    }
    addComplaintes(){
        Complaint.create()
    }
}


const complaintsDataAccessor = new ComplaintsDataAccessor();
module.exports = complaintsDataAccessor;