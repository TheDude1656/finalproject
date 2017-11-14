module.exports = function (sequelize, DataTypes) {
    var Tech = sequelize.define("Tech", {name: DataTypes.STRING,
    email: DataTypes.STRING, password: DataTypes.STRING});

    return Tech;
};