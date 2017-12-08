module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        customername: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customeraddress: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customerphone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        customeremail:{
            type: DataTypes.STRING,
            allowNull: true
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
            allowNull: true
        },
        servicedate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        serviceOrderNumber: {
            type: DataTypes.STRING,
            allowNull: true
        },
        travelhours: {
            type: DataTypes.STRING,
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
            allowNull: true
        },
        vehicleUsed: {
            type: DataTypes.STRING,
            allowNull: true
        },
        poNumber: {
            type: DataTypes.STRING,
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
            type: DataTypes.TEXT,
            allowNull: true
        }

    });
    return Ticket;
};