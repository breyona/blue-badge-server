module.exports = function (sequelize, DataTypes) {
    return sequelize.define('employee', {
        firstname: DataTypes.STRING, 
        lastname: DataTypes.STRING,
        jobtitle: DataTypes.STRING,
        username: DataTypes.STRING,
        owner: DataTypes.INTEGER
        
    });
}

