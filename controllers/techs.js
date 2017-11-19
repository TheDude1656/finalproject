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
            .create({name: req.body.name, email: req.body.email, password: req.body.password})
            .then(tech => res.status(200).send(tech))
            .catch(error => {
                console.log(error)
                res
                    .status(400)
                    .send(error)
            });
    },
    retrieve(req, res) {
        console.log(req.body)
        return Tech
        
            .findOne({
                where: {name: req.body.name}
            })
            .then(tech => {
                if (!tech) {
                    console.log("no tech detected!")
                    return res
                        .status(404)
                        .send({message: 'Technician not found! Please create or use correct login!'});
                } else {
                    console.log("made it to this!")
                    return Tech
                    .beforeCreate(validateHash)
                    .create({name: req.body.name, password: req.body.password})
                    .then(tech => res.status(200).send(tech))
                    .catch(error => {
                        console.log(error)
                        res.status(400)
                        .send(error)
                    });
                }
                return res
                    .status(200)
                    .send(tech);
            })
            .catch(error => res.status(400).send(error));

    }
};