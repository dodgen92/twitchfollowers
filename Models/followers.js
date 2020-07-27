var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var followers = sequelize.define("Followers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  handle: Sequelize.STRING,
  info: Sequelize.STRING,
});

followers.sync();

module.exports = followers;