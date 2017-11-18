const Tech = require('../models').Tech;
const bcrypt = require('bcrypt');


function generateHash(tech) {
    console.log(tech.password)
    return tech.password = bcrypt.hashSync(tech.password, bcrypt.genSaltSync(5));
}

function validateHash(tech) {
    console.log(tech.password)
    return tech.password = bcrypt.compareSync(tech.password, this.password);
}


module.exports = {
    create(req, res) {
        return Tech
            .beforeCreate(generateHash)
            .create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(tech => res.status(200).send(tech))
            .catch(error => {
                console.log(error)
                res.status(400).send(error)
            });
    },
    verify(req, res) {
        return Tech
        .all()
        .then(customer => res.status(201).send(customer))
        .catch(error => res.status(400).send(error));

    }
};