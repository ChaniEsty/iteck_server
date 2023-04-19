const db = require('../model/index');
const Subject = db.db.subjects;

class SubjectsDataAccessor {
    addSubject = async (name) => {
        const subjectExist = await Subject.findOne({ where: { name: name } })
        if (subjectExist == null) {
            const s = await Subject.create({ name });
            return s;
        }
        else
            return subjectExist;
    }
    getSubjects = async () => {
        return await Subject.findAll();
    }
    getSubjectById=async(id)=>{
        return await Subject.findOne({ where: { idSubject: id } },{attributes:"name"})
    }
}


const subjectsDataAccessor = new SubjectsDataAccessor();
module.exports = subjectsDataAccessor;