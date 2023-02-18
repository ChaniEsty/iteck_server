const employerDal = require("../dal/employerAccessor");

class EmployerController {
   
    getJobs = async (req, res) => {
        const idEmp=req.params;
        console.log("in getjobs",idEmp);
        const jobs=employerDal.getJobs(idEmp.id);
        if(jobs==null)
            res.status(400).json('invalid id');
        else
            res.status(201).json({"jobs":jobs});
    }
}
const employerController = new EmployerController();
module.exports = employerController;