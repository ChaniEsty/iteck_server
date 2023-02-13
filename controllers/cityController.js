const cityDal = require("../dal/cityAccessor");
// const db = require('../model/index')
// const Job = db.db.jobs

class CityController {
    getCities=async(req,res) => {
        const cityList=await cityDal.getCities();
        res.json(cityList);
     }
     addCity=async(req,res) => {
        const{name}=req.body;
        const city=await cityDal.addCity(name);
      } 
                                                                                                       
}
const cityController = new CityController();
module.exports = cityController;