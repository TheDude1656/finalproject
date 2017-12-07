module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        customername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customeraddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerphone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customeremail:{
            type: DataTypes.STRING,
            allowNull: false
        },
        contactname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contactphone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        contactemail: {
            type: DataTypes.STRING,
            allowNull: true
        },
        insertedByTech: {
            type: DataTypes.STRING,
            allowNull: false
        },
        servicedate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        serviceOrderNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        travelhours: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stopTime: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serviceType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vehicleUsed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        poNumber: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        jobCompleted: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jobDescription: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customerSignature: {
            type: DataTypes.STRING,
            allowNull: true
        }

    });
    return Ticket;
};