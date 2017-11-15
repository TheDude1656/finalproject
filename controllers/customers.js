const Customer = require('../models').Customers;

module.exports = {
    create(req, res) {
        return Customer
            .create({
                name: req.body.name                 
            })
            .then(customer=> res.status(201).send(customer))
            .catch(error =>res.status(400).send(error));
    },    
};