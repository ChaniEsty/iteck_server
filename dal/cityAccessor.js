const db = require('../model/index');
const City = db.db.citys;

class CitiesDataAccessor {
    addCity = async (name) => {
        const cityExist = await City.findOne({ where: { name: name } })
        if (cityExist == null) {
            return await City.create({ name });
        }
        else
            return cityExist;
    }
    getCities = async () => {
        return await City.findAll();
    }
}


const citiesDataAccessor = new CitiesDataAccessor();
module.exports = citiesDataAccessor;

