const dbConfig = require('../config/dbConfig');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
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
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
  
const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users  = require('./user')(sequelize, DataTypes)
db.jobs  = require('./job')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})
module.exports = db