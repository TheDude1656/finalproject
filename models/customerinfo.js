module.exports = (sequelize, DataTypes) => {
    const CustomerInfo = sequelize.define("CustomerInfo", {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        contactName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contactEmail: {
            type: DataTypes.STRING,
            allowNull: true
        },
    });

    CustomerInfo.associate = (models) => {
        CustomerInfo.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            onDelete: 'CASCADE',
        });
    };

    return CustomerInfo;
};