const subjectDal = require("../dal/subjectAccessor");
// const db = require('../model/index')
// const Job = db.db.jobs

class SubjectController {
    getSubjects = async (req, res) => {
        const subjectList = await subjectDal.getSubjects();
        res.json(subjectList);
    }
    //  addSubject=async(req,res) => {
    //     const{name}=req.body;
    //     const subject=await subjectDal.addSubject(name);
    //     res.json(subject);
    //   } 

}
const subjectController = new SubjectController();
module.exports = subjectController;