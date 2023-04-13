const subjectDal = require("../dal/subjectAccessor");

class SubjectController {
    getSubjects = async (req, res) => {
        const subjectList = await subjectDal.getSubjects();
        res.json(subjectList);
    }
}
const subjectController = new SubjectController();
module.exports = subjectController;