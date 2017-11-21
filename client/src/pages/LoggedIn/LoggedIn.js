import React, {Component} from 'react';
import '../../App.css';
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {ListItem, ListItemInfo} from "../../components/List";
import {Link} from "react-router-dom";

class App extends Component {

    state = {
        customerArray: [],
        value: '',
        selectedcustomer: {}
    };
    componentDidMount() {
        this.getAllCustomers();

    }

    getAllCustomers = () => {
        API
            .getCustomers()
            .then(res => {
                this.setState({customerArray: res.data})
                console.log(this.state)
            })
            .catch(err => console.log(err));
    }
    handleCustomerInfo = (event) => {
        this.setState({value: event.target.value});
        console.log("customer info will show");
    }

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
                        <ListItemInfo >
                            <p>
                                Customer Name: {this.state.value}
                                <br/>
                                Address:
                                <br/>
                                Phone:
                                <br/>
                                Contact Name:
                                <br/>
                                Contact Email:
                                <br/>
                            </p>
                        </ListItemInfo>
                    </div>

                    <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                    <Link to={`/NewCustomer`} className="btn btn-lg loginBtn btn-outline-primary">NewCustomer</Link>

                </div>
            </div>
        );
    };
};

export default App;
