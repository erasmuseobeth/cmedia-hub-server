const Sequelize = require('sequelize');

module.exports = new Sequelize('cmedia_hub', 'cmedia_hub', '@Cmedia_hub', {
    host:'localhost',
    dialect:'mysql',
    port: 3306,
});




// module.exports = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'db.sqlite', // You can specify the path where you want to store the SQLite database file
// });


