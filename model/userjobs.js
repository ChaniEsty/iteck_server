const { sequelize, DataTypes } = require("./sequelize");
const USERJOBS = sequelize.define(
    "userjobs",
    {
       
    },
    {
        timestamps: false,
    }
);

module.exports = USERJOBS;