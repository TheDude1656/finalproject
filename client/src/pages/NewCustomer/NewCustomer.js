import React, {Component} from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {Link} from "react-router-dom";
// import API from "../../utils/API";

class App extends Component {
    state = {
        customername: "",
        customeraddress: "",
        contactname: "",
        contactphone: "",
        customeremail: "",
        customerphone: "",
        insertedby: ""
    }

    render() {
        return (
            <div className="container">
                <Jumbotron/>
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
                        value={this.state.customername}/>
                </div>
                <div className="form-group">
                    <label htmlFor="customerphone">Customer's Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={this.handleInputChange}
                        value={this.state.customerphone}/>
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
                        value={this.state.customeraddress}/>
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
                        value={this.state.contactname}/>
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
                        value={this.state.contactphone}/>
                </div>
                <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Back</Link>
                <Link
                    to={`../LoggedIn`}
                    className="btn btn-lg loginBtn btn-outline-success"
                    onClick={this.handleNewCustomer}>Create</Link>

            </div>

        );
    };
};
export default App;
