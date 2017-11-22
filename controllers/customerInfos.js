const CustomerInfo = require('../models').CustomerInfo;
const Customer = require('../models').Customer;

module.exports = {
    create(req, res) {
        return CustomerInfo
            .create({
                address: req.body.address,
                phone: req.body.phone,
                contactName: req.body.contactName,
                email: req.body.email,
                contactEmail: req.body.contactEmail,
                contactPhone: req.body.contactPhone,
                addedBy: req.body.addedBy,
                customerId: req.body.customerId
                 
            })
            .then(customerInfo=> res.status(201).send(customerInfo))
            .catch(error =>res.status(400).send(error));
    },
    list(req, res) {
        return CustomerInfo
        .findAll({
            indclude: [{
                model: Customer,
                as: 'customers',
            }],
        })
        .then(customerInfo => res.status(200).send(customerInfo))
        .catch(error => res.status(400).send(error));
    }
    
};