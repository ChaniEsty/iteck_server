const complaintsDal = require("../dal/userAccessor");
const verifyJWT = require("../middleware/verifyJWT");
class ComplaintsController {
    getcomplaintes(){
        const complainte=complaintsDal.getcomplaintes();
    }
    addComplaintes(){
        complaintsDal.addComplaintes();
    }
}
const complaintsController = new ComplaintsController();
module.exports = complaintsController;