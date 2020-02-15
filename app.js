var express = require('express');
var app = express();

var sequelize = require('./db');
var bodyParser = require('body-parser');

var user = require('./controllers/usercontroller')
var employee = require('./controllers/employeecontroller')

sequelize.sync();
app.use(bodyParser.json());


app.use(require('./middleware/header'))
app.use('/api/user', user)
app.use(require('./middleware/validate-session'))
app.use('/api/employee', employee)









app.listen(3004, function(){
    console.log('App is listening on 3004')
})