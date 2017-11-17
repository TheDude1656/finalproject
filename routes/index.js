const customerController = require('../controllers').customers;
const customerInfoController = require('../controllers').customerInfos;

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the customers!',
    }));

    app.post('/api/customers', customerController.create);
    app.get('/api/customers', customerController.list);

    app.post('/api/customers/:customerId/info', customerInfoController.create);
    app.get('/api/customers/:customerId', customerController.retrieve);
};