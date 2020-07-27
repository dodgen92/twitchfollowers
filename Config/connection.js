  
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL USING SEQUELIZE
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
require("dotenv").config();

//Creates mySQL connection using Sequelize through jawsDB if hosted from Heroku or mySQL if hosted locally
if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  var sequelize = new Sequelize(
    process.env.locDB,
    process.env.locDBUSER,
    process.env.locDBPASS,
    {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
      },
    }
  );
}

module.exports = sequelize;
