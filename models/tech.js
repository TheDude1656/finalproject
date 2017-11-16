const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const Tech = sequelize.define("Tech", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, 
    {
            instanceMethods: {
                generateHash(password) {
                    return bcrypt.hash(password, bcrypt.genSaltSync(5));
                },
                validpassword(password) {
                    return bcrypt.compare(password, this.password);
                }
            }
        }
    );

    return Tech;
};