const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize({
    database: 'fajar-cruds',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})


module.exports = sequelize