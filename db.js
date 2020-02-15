const Sequelize = require('sequelize');
const sequelize = new Sequelize("employeelist", "postgres", "password",{
    host: "localhost",
    dialect: "postgres"
});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established succesfully.');
})
.catch(err => {
    console.error ('Unable to connect to the database:', err);
});

module.exports = sequelize