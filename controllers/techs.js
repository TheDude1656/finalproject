const Tech = require('../models').Tech;

module.exports = {
    create(req, res) {
        console.log(req);
        return Tech
            .create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(tech => res.status(200).send(tech))
            .catch(error => res.status(400).send(error));

    }
};