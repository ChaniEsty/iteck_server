const cityDal = require("../dal/cityAccessor");

class CityController {
    getCities=async(req,res) => {
        const cityList=await cityDal.getCities();
        res.json(cityList);
     }
                                                                                                       
}
const cityController = new CityController();
module.exports = cityController;