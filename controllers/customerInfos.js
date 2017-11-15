const CustomerInfo = require('../models').CustomerInfo;

module.exports = {
    create(req, res) {
        return CustomerInfo
            .create({
                address: req.body.address,
                phone: req.body.phone,
                contactName: req.body.constactName,
                contactEmail: req.body.contactEmail 
            })
            .then(CustomerInfo=> res.status(201).send(CustomerInfo))
            .catch(error =>res.status(400).send(error));
    },
    // list(req,res) {
    //     return CustomerInfo
    //     .all()
    //     .then(CustomerInfo => res.status(200).send(CustomerInfo))
    //     .catch(error => res.status(400).send(error));
    // },
    
};