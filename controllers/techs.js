const Tech = require('../models').Tech;
const bcrypt = require('bcrypt');



function generateHash(tech) {
    console.log(tech.password)
    return tech.password = bcrypt.hashSync(tech.password, bcrypt.genSaltSync(5));
}

function validateHash(tech, req) {
    // console.log(tech[0].dataValues.password);
    console.log(tech.password)
    console.log(req)
    bcrypt.compareSync(tech.password, tech.body.password, (err, matched) => {
        if (err) return res.json({error: 'Compare failed.'});
        if (!matched) return res.json({error: 'Invalid password.'});
        if (matched) return res.json('success!');
    });
  
    // return tech.password = bcrypt.compareSync(tech.password, this.password);
    
}
// function getDbHash() {
//     let dbUserHash = "";

// }


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
    retrieve(req, res) {
        console.log("hit validation")
        return Tech
        .findAll({
            where: {
                name: req.params.username
            }
        })
        .then(tech => {
            console.log(tech)
            res.status(201).send(tech)
        })
        .catch(error => res.status(400).send(error));
    },
    verify(req, res) {
        console.log(req.body)
        validateHash(req.body)
        
    }
};