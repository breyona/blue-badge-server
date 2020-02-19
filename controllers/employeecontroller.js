var express = require('express')
var router = express.Router()
var sequelize = require('../db')

var express = require('express');
var router = express.Router();
var Employee = sequelize.import('../models/employee');



router.get("/employee", function(req, res) {
    var userid = req.user.id;
    Employee.findAll({
      where: { owner: userid },
      order: [["id", "ASC"]]
    }).then(
      function findAllSuccess(data) {
        res.json(data);
      },
      function findAllError(err) {
        res.send(500, err.message);
      }
    );
  });


router.post('/employee', function (req, res) {
    let userId= req.user.id;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let username = req.body.username;
    let jobtitle = req.body.jobtitle;
    

    Employee.create({
        owner: userId,
        firstname: firstname,
        jobtitle: jobtitle,
        lastname: lastname,
        username: username,
        

    }).then(function createSuccess(response) {

        res.json(response);

    }, function createError(err) {
        res.send(500, err.message);
    }
    );

});


router.get("/employee/:id", function(req, res) {
  var data = req.params.id;
  var userid = req.user.id;
  Log.findOne({
    where: { id: data, owner: userid }
  }).then(
    function findOneSuccess(data) {
      res.json(data);
    },
    function findOneError(err) {
      res.send(500, err.message);
    }
  );
});

router.put('/employee/update/:id', function (req, res) {
    var data = req.params.id;
    var loggingData = req.body;
    var userid = req.user.id;
    
    Employee.update(
        {
            firstname: loggingData.firstname,
            lastname: loggingData.lastname,
            jobtitle: loggingData.jobtitle,
            username: loggingData.username,
           
        },
        { where: { id: data, owner:userid } }
    ).then(
      function updateSuccess(updatedEmployee) {
        res.json({
          logData: updatedEmployee
        });
      },
      function updateError(err) {
        res.send(500, err.message);
      }
    );
});


router.delete("/employee/delete/:id", function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;
    Employee.destroy({
      where: { id: data, owner: userid }
    }).then(
      function deleteLogSuccess(data) {
        res.send("You Removed A Log");
      },
      function deleteLogError(err) {
        res.send(500, err.message);
      }
    );
  });


module.exports = router;