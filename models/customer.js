module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define("Customer", {
        customername: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    Customer.associate = (models) => {
        Customer.hasMany(models.CustomerInfo, {
            foreignKey: 'customerId',
        });
    };
    return Customer;
};