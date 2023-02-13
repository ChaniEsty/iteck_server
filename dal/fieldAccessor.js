const db = require('../model/index');
const Field=db.db.fields;

class FieldsDataAccessor{
    addField=async(name)=>{
        const fieldExist=await Field.findOne({where:{name:name}})
        if(fieldExist==null){
            const f=await Field.create({name});
            return f;}
        else
            return fieldExist;
    } 
    getFields=async()=>{
        const fieldsList=await Field.findAll();
        return fieldsList;
    }                    
}
        

  const fieldsDataAccessor = new FieldsDataAccessor();
  module.exports = fieldsDataAccessor;