const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
})

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established succesfully.');
})
.catch(err => {
    console.error ('Unable to connect to the database:', err);
});

module.exports = sequelize