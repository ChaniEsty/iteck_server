const db = require('../model/index');
const City=db.db.citys;

class CitiesDataAccessor{
    addCity=async(name)=>{
        const cityExist=await City.findOne({where:{name:name}})
        console.log(cityExist);
        if(cityExist==null)
            {const c=await City.create({name});
             console.log("in add city",c.idCity);
             return c;}
        else
            return cityExist;
    } 
    //deleteCity=async()
    getCities=async()=>{
        const cityList=await City.findAll();
        return cityList;
    }
}
        

  const citiesDataAccessor = new CitiesDataAccessor();
  module.exports = citiesDataAccessor;

  