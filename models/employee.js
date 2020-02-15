module.exports = function (sequelize, DataTypes) {
    return sequelize.define('employee', {
        employeename: DataTypes.STRING, 
        jobdescription: DataTypes.STRING,
        email: DataTypes.STRING,
        city: DataTypes.STRING,
        phone: DataTypes.STRING,
        owner: DataTypes.INTEGER
        
    });
}

