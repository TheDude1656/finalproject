module.exports = (sequelize, DataTypes) => {
    const CustomerInfo = sequelize.define("CustomerInfo", {
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
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
        contactPhone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        addedBy: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customerId: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    CustomerInfo.associate = (models) => {
        CustomerInfo.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            onDelete: 'CASCADE'
        });
    };

    return CustomerInfo;
};