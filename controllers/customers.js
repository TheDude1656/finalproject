const Customer = require('../models').Customer;
const CustomerInfo = require('../models').CustomerInfo;

module.exports = {
    create(req, res) {
        console.log(req.body);
        return Customer
            .create({
                customername: req.body.customername,
            })
            .then(customer => res.status(201).send(customer))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Customer
            .findAll({
                include: [{
                    model: CustomerInfo
                }]
            })
            .then(customers => res.status(200).send(customers))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return Customer
            .findById(req.params.id, {
                include: [{
                    model: CustomerInfo
                }]
            })
            .then(customer => {
                if (!customer) {
                    return res.status(404).send({
                        message: 'Customer not found!',
                    });
                }
                return res.status(200).send(customer);
            })
            .catch(error => res.status(400).send(error));
    }
};