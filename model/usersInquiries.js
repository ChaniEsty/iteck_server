const { sequelize, DataTypes } = require("./sequelize");
const USERINQUIRIES = sequelize.define(
    "usersInquiries",
    {
        inquiry: {
            type: DataTypes.TEXT,
        },
    },
    
);

module.exports = USERINQUIRIES;