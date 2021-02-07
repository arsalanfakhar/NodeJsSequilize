const {
  Sequelize
} = require('sequelize');
const dbConfig = require('../config/dbconfig');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial_model')(sequelize, Sequelize);
db.comments = require('./comment_model')(sequelize, Sequelize);

db.tutorials.hasMany(db.comments,{as:'comments'});

db.comments.belongsTo(db.tutorials,{
  foreignKey:'tutorialId',
  as:'tutorial',
});

module.exports = db;