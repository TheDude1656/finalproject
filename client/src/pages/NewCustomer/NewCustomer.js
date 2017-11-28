import React, { Component } from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class App extends Component {
    state = {
        customername: "",
        customeraddress: "",
        contactname: "",
        contactEmail: "",
        contactphone: "",
        customeremail: "",
        customerphone: "",
        insertedby: "",
        customerId: -1
    }
    loadNewCustomer = () => {
        API
            .getCustomers()
            .then(res => this.setState({
                customername: "",
                customeraddress: "",
                contactEmail: "",
                contactname: "",
                contactphone: "",
                customeremail: "",
                customerphone: "",
                insertedby: ""
            }))
            .catch(err => console.log(err));
    }
    insertCustomerInfo = customerId => {

        API
            .createNewCustomerInfo({

                address: this.state.customeraddress,
                phone: this.state.customerphone,
                email: this.state.customeremail,
                contactName: this.state.contactname,
                contactEmail: this.state.contactEmail,
                contactPhone: this.state.contactphone,
                addedBy: this.state.insertedby,
                customerId: customerId
            })
            .then(res => {
                alert("New Customer Created, Go back to start ticket!");
                this.loadNewCustomer()
            })
            .catch(err => console.log(err));
    }
    handleNewCustomer = event => {
        event.preventDefault();
        console.log(this.state);
        
        API
            .createNewCustomer({
                customername: this.state.customername

            })
            .then(res => {
                
                this.insertCustomerInfo(res.data.id)
                
            }
            )
            .catch(err => console.log(err));

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customername"
                        name="customername"
                        placeholder="Customer Name"
                        aria-label="Customer Name"
                        onChange={this.handleInputChange}
                        value={this.state.customername} />
                </div>
                <div className="form-group">
                    <label htmlFor="customerphone">Customer's Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerphone"
                        name="customerphone"
                        placeholder="Phone Number"
                        onChange={this.handleInputChange}
                        value={this.state.customerphone} />
                </div>
                <div className="form-group">
                    <label htmlFor="customeremail">Customer's Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customeremail"
                        name="customeremail"
                        placeholder="Customer's Email"
                        onChange={this.handleInputChange}
                        value={this.state.customeremail} />
                </div>
                <div className="form-group">
                    <label htmlFor="customeraddress">Customer's Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customeraddress"
                        name="customeraddress"
                        placeholder="Customer's Address"
                        onChange={this.handleInputChange}
                        value={this.state.customeraddress} />
                </div>
                <div className="form-group">
                    <label htmlFor="contactname">Contact Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactname"
                        name="contactname"
                        placeholder="Contact's Name"
                        onChange={this.handleInputChange}
                        value={this.state.contactname} />
                </div>
                <div className="form-group">
                    <label htmlFor="contactphone">Contact's Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactphone"
                        name="contactphone"
                        placeholder="Contact's Phone"
                        onChange={this.handleInputChange}
                        value={this.state.contactphone} />
                </div>
                <div className="form-group">
                    <label htmlFor="contactEmail">Contact's Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="contactEmail"
                        name="contactEmail"
                        placeholder="Contact's Phone"
                        onChange={this.handleInputChange}
                        value={this.state.contactEmail} />
                </div>
                <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                <Link
                    to={`../LoggedIn`}
                    className="btn btn-lg loginBtn btn-outline-success"
                    onClick={this.handleNewCustomer}>Create</Link>
                <Link to={`/LoggedIn`} className="btn btn-lg loginBtn btn-outline-danger">Back</Link>

            </div>

        );
    };
};
export default App;
