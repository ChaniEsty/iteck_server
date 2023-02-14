const fieldDal = require("../dal/fieldAccessor");
// const db = require('../model/index')
// const Job = db.db.jobs

class FieldController {
    getFields=async(req,res) =>{
        const fieldList=await fieldDal.getFields();
        res.json(fieldList);
    }
    // addField=async(req,res) =>{
    //     const{name}=req.body;
    //     const field=await fieldDal.addField(name);
    //     res.json(field);
    // } 
                                                                                                       
}
const fieldController = new FieldController();
module.exports = fieldController;