const employerDal = require("../dal/employerAccessor");

class EmployerController {
   
    getJobsById = async (req, res) => {
        const idEmp=req.params;
        const jobs=employerDal.getJobsById(idEmp.id);
        if(jobs==null)
            res.status(400).json('invalid email');
        else
            res.status(201).json({"jobs":jobs});
    }
}
const employerController = new EmployerController();
module.exports = employerController;