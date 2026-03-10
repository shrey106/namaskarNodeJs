const dbConfig = require("../config/dbConfig"); // yo chai database ko config import garna ho
const { Sequelize, DataTypes } = require("sequelize"); // yo chai Sequelize ra DataTypes use garna import ho

// yo chai sequelize use garera database connect garna ho
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

  host: dbConfig.HOST, // yo chai database host set garna
  dialect: dbConfig.dialect, // yo chai database type (mysql etc.)
  operatorsAliases: false, // yo chai old operators disable garna
  port : 3306, // yo chai database port number ho

  pool: { // yo chai connection pool settings ho
    max: dbConfig.pool.max, // maximum connection
    min: dbConfig.pool.min, // minimum connection
    acquire: dbConfig.pool.acquire, // connection wait time
    idle: dbConfig.pool.idle, // idle connection time
  },
});

// yo chai database connection check garna
sequelize
  .authenticate()
  .then(() => {
    console.log("CONNECTED!!"); // connect vayo vane yo print hunxa
  })
  .catch((err) => {
    console.log("Error" + err); // error ayo vane yo print hunxa
  });

const db = {}; // yo chai sabai database related kura store garna object ho

db.Sequelize = Sequelize; // yo chai Sequelize class store garna
db.sequelize = sequelize; // yo chai sequelize instance store garna

// importing model files

db.users = require("./userModel.js")(sequelize, DataTypes); // yo chai user model import garna

// yo chai database ra models sync garna
db.sequelize.sync({ force: false}).then(() => {
  console.log("yes re-sync done"); // sync vayo vane yo print hunxa
});

module.exports = db; // yo chai db object aru file ma use garna export ho