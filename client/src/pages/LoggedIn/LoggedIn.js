import React, { Component } from 'react';
import '../../App.css';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { ListItem, ListItemInfo } from "../../components/List";
import { Link } from "react-router-dom";

class App extends Component {

    state = {
        customerArray: [],
        selectedCustomer: [],
        value: '',
        address: '',
        phone: '',
        contactname: '',
        contactemail: ''
    };
    componentDidMount() {
        this.getAllCustomers();

    }

    getAllCustomers = () => {
        API
            .getCustomers()
            .then(res => {
                this.setState({ customerArray: res.data })
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }
    handleCustomerInfo = (event) => {
        
        this.setState({
            value: event.target.value,
        })
        this.handleCustomerState()

        console.log("customer info will show");
    }
    handleCustomerState = () => {
        const person =this.state.customerArray.find(c=>c.customername === this.state.value)
       console.log(person)
        this.setState({selectedCustomer: person}) 
    

    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
                <p className="text-right">Logged In User:
                </p>

                <div className="form-group">

                    <div className="form-control form-control-lg">
                        <label>Select Customer</label>
                        <select
                            onChange={this.handleCustomerInfo}
                            value={this.state.value}
                            className="form-control form-control-lg">
                            {this.state.customerArray.map(custname => (
                                <ListItem key={custname.customername}>
                                    {custname.customername}
                                </ListItem>
                            ))}

                        </select>
                    </div>

                    <div className="form-control form-control-lg">
                        <label htmlFor="customerInfo">Customer Information</label>
                        <ListItemInfo>
                            <p>
                                Customer Name: {this.state.customername}
                                <br />
                                Address:{this.state.address}
                                <br />
                                Phone:{this.state.phone}
                                <br />
                                Contact Name:{this.state.contactname}
                                <br />
                                Contact Email:{this.state.contactemail}
                                <br />
                            </p>
                        </ListItemInfo>

                    </div>

                    <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                    <Link to={`/NewCustomer`} className="btn btn-lg loginBtn btn-outline-primary">NewCustomer</Link>

                </div>
            </div >
        );
    };
};

export default App;
