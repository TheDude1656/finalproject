import axios from "axios";

export default {
    createNewTech: function (newTechData) {
        return axios.post("/api/tech", newTechData);
    },
    getUser: function() {
        return axios.get("/api/tech");
    },
    // userLogin: function(loggedinuser) {
    //     return axios.get("/loggedinuser", loggedinuser);
    // },
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
    }
};