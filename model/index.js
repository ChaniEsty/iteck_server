const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');
class Sequle{
    sequelize = new Sequelize(
            dbConfig.DB,
            dbConfig.USER,
            dbConfig.PASSWORD, {
                host: dbConfig.HOST,
                dialect: dbConfig.dialect,
                operatorsAliases: false,

                pool: {
                    max: dbConfig.pool.max,
                    min: dbConfig.pool.min,
                    acquire: dbConfig.pool.acquire,
                    idle: dbConfig.pool.idle

                }
            }
        )
    db = {}
    DataTypes=DataTypes
    constructor(){
        this.sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    
    

        this.db.Sequelize = Sequelize
        this.db.sequelize = this.sequelize

        this.db.users  = require('./user').USER//(sequelize, DataTypes)
        this.db.jobs  = require('./job').JOB//(sequelize, DataTypes)
        this.db.employers  = require('./employer').EMPLOYER//(sequelize, DataTypes)
        this.db.fields  = require('./field').FIELD//(sequelize, DataTypes)
        this.db.citys  = require('./city').CITY//(sequelize, DataTypes)
        this.db.subjects  = require('./subject').SUBJECT//(sequelize, DataTypes)
        this.db.usersjobs  = require('./userjobs').USERJOB//(sequelize, DataTypes)
        this.db.logIns  = require('./logIn').LOGIN//(sequelize, DataTypes)
        this.db.sequelize.sync({ force: false })
        .then(() => {
            console.log('yes re-sync done!')
        })
    }
}
const sequle = new Sequle();
module.exports = sequle;
//module.exports = db