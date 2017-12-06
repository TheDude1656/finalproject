const Tech = require('../models').Tech;
const bcrypt = require('bcrypt');

function generateHash(tech) {
    console.log(tech.password)
    return tech.password = bcrypt.hashSync(tech.password, bcrypt.genSaltSync(5));
}

function validateHash(req, tech) {
    console.log("tech", tech, "req", req)
    return bcrypt.compareSync(tech, req, (err, matched) => {
        if (matched) {
            return true
        } else {
            return false
        }
    });
}

module.exports = {
    create(req, res) {
        return Tech
            .beforeCreate(generateHash)
            .create({name: req.body.name, email: req.body.email, password: req.body.password})
            .then(tech => res.status(200).send(tech))
            .catch(error => {

                res
                    .status(400)
                    .send(error)
            });
    },
    list(req, res) {
        return Tech
            .findAll({})
            .then(techs => res.status(200).send(techs))
            .catch(error => res.status(400).send(error));
    },

    verify(req, res) {

        let tech = Tech
            .findAll({
            where: {
                name: req.body.username
            }
        })
            .then(tech => {
                let response = validateHash(tech[0].password, req.body.password)
                // console.log(response)
                if (response === true) {
                    res
                        .status(200)
                        .send("password worked!")

                } else {
                    res
                        .status(401)
                        .send("Unauthorized")
                }
            })
            .catch(error => res.status(401).send("not authorized"));
    }

};