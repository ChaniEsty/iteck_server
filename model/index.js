const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./sequelize');
const applyExtraSetup = require("./extra-setup");
class Sequle {
 
    db = {}
    constructor() {

        this.db.Sequelize = Sequelize;
        this.db.sequelize = sequelize;

        this.db.users = require('./user')
        this.db.jobs = require('./job')
        this.db.employers = require('./employer')
        this.db.fields = require('./field')
        this.db.citys = require('./city')
        this.db.subjects = require('./subject')
        this.db.usersjobs = require('./userjobs')
        this.db.logIns = require('./logIn')
        applyExtraSetup.applyExtraSetup();
        this.db.sequelize.sync({ alter:true})
            .then(() => {
                console.log('Its working😁😊👍!')
            })
    }
}
const sequle = new Sequle();
module.exports = sequle;
