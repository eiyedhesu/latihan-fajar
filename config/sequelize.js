const {Sequelize} = require ('sequelize')

const sequelize = new Sequelize({
    database: 'fajar-cruds',
    host: 'localhost',
    username: 'root',
    password: 'root',
    dialect: 'mysql'
})
// sequelize.authenticate().then(() => {
//     console.log('Connection has been established successfully.');
//  }).catch((error) => {
//     console.error('Unable to connect to the database: ', error);
//  });

module.exports = sequelize