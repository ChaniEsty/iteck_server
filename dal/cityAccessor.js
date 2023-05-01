const db = require('../model/index');
const City = db.db.citys;

class CitiesDataAccessor {
    addCity = async (name) => {
        const cityExist = await City.findOne({ where: { name: name } });
        if (cityExist == null) {
            return await City.create({ name });
        }
        else
            return cityExist;
    }
    getCities = async () => {
        return await City.findAll();
    }
    getCityById= async (id) => {
        const city= await City.findOne({ where: { idCity: id } ,attributes:["name"]});
        const name=city.name;
        //console.log(name,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        return name;
    }
}


const citiesDataAccessor = new CitiesDataAccessor();
module.exports = citiesDataAccessor;

