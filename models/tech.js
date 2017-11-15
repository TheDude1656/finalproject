module.exports = (sequelize, DataTypes) => {
    const Tech = sequelize.define("Tech", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    return Tech;
};