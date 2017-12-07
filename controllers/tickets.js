const Ticket = require('../models').Ticket;

module.exports = {
    create(req, res) {
        // console.log(req.body)
        return Ticket
            .create({
                customername: req.body.customername,
                customeraddress: req.body.customeraddress,
                customerphone: req.body.customerphone,
                customeremail: req.body.customeremail,
                contactname: req.body.contactname,
                contactphone: req.body.contactphone,
                contactemail: req.body.contactemail,
                insertedByTech: req.body.insertedByTech,
                servicedate: req.body.servicedate,
                serviceOrderNumber: req.body.serviceOrderNumber,
                travelhours: req.body.travelhours,
                startTime: req.body.startTime,
                stopTime: req.body.stopTime,
                serviceType: req.body.serviceType,
                vehicleUsed: req.body.vehicleUsed,
                poNumber: req.body.poNumber,
                jobCompleted: req.body.jobCompleted,
                jobDescription: req.body.jobDescription,
                customerSignature: req.body.customerSignature
                
            })
            .then(ticket => res.status(200).send(ticket))
            .catch(error => res.status(404).send(error));
    },
    list(req,res){
        return Ticket
            .findAll({

            })
            .then(ticket => res.status(200).send(ticket))
            .catch(err => res.status(404).send(error));
    }
}