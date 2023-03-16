const { sequelize, DataTypes } = require("./sequelize");
const USERCOMPLAINTES = sequelize.define(
    "usersComplaintes",
    {
        complainte: {
            type: DataTypes.TEXT,
        },
    },
    
);

module.exports = USERCOMPLAINTES;