import axios from "axios";

export default {
    createNewTech: function (newTechData) {
        return axios.post("/api/tech", newTechData);
    },
    getUser: function() {
        return axios.get("/api/tech");
    },
    userLogin: function(loggedinuser) {
        return axios.post("/loggedinuser", loggedinuser);
    },
    getCustomers: function() {
        return axios.get("/api/customers");
    },
    createNewCustomer: function (newCustomer) {
        return axios.post("/api/customers", newCustomer);
    },
    createNewCustomerInfo: function (newCustomerInfo) {
        return axios.post("/api/customers/info", newCustomerInfo);
    }
};