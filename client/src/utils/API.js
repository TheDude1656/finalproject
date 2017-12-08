import axios from "axios";

export default {
    createNewTech: function (newTechData) {
        return axios.post("/api/tech", newTechData);
    },
    getUser: function() {
        return axios.get("/api/tech");
    },
    userAuthenticate: function(username, password) {
        return axios.post("/api/auth", username, password);
    },
    getCustomers: function() {
        return axios.get("/api/customers");
    },
    createNewCustomer: function (newCustomer) {
        return axios.post("/api/customers", newCustomer);
    },
    createNewCustomerInfo: function (newCustomerInfo) {
        return axios.post("/api/customers/info", newCustomerInfo);
    },
    createTicket: function (newTicket) {
        return axios.post("/api/newticket", newTicket);
    },
    getLastTicket: function (lastTicket) {
        return axios.get("/api/ticket", lastTicket);
    }
};