const db = require('../model/index');
const Field = db.db.fields;

class FieldsDataAccessor {
    addField = async (name) => {
        const fieldExist = await Field.findOne({ where: { name: name } })
        if (fieldExist == null) {
            const f = await Field.create({ name });
            return f;
        }
        else
            return fieldExist;
    }
    getFields = async () => {
        return await Field.findAll();
    }
    getFieldById=async(id)=>{
        const x= await Field.findOne({ where:{ idField: id },attributes:["name"]})
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"+x.name);
        return x.name;
    }
}


const fieldsDataAccessor = new FieldsDataAccessor();
module.exports = fieldsDataAccessor;