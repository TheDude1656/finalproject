module.exports = function (sequelize, DataTypes) {
    var customerInfo = sequelize.define("customerInfo", {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    });

    customerInfo.associate = function (models) {
        customerInfo.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return customerInfo;
};