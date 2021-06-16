const { Sequelize , DataTypes } = require('sequelize');

const config = require('../config/config.json')
const sequelize = new Sequelize(config.development.database,config.development.username,config.development.password,{
    host:"localhost",
    dialect:"postgres",
    logging:false,
    port:5434
})


sequelize.authenticate()
.then(()=>{
    console.log("connected");



})

const db = {}
db.connect =sequelize;
db.user = require('./user')(sequelize,DataTypes);


db.user.sync({force:true})
.then(()=>{
    console.log('Table is created')
})

module.exports=db;
