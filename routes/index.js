const customerController = require('../controllers').customers;
const customerInfoController = require('../controllers').customerInfos;
const techController = require('../controllers').techs;


module.exports = (app) => {

    // api customers root
    app.get('/api', (req, res) => res.status(200).send({message: 'Welcome to the customers!'}));

    //customer posting and getting
    app.post('/api/customers', customerController.create);
    app.get('/api/customers', customerController.list);

    //specific customer posting and getting
    app.post('/api/customers/info', customerInfoController.create);
    app.get('/api/customers/:id', customerController.retrieve);

    //login and creating of technicians
    app.post('/api/tech', techController.create);
    app.post('/api/auth', techController.verify);

    //get all techs
    app.get('/api/tech', techController.list);

};