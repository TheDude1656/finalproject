import React, {Component} from 'react';
import '../../App.css';
import API from "../../utils/API";
import SmallJumbo from "../../components/SmallJumbo/SmallJumbo";
import {ListItems, ListItemsInfo} from "../../components/List";
import {Link} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import Checkbox from 'material-ui/Checkbox';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
    block: {
        maxWidth: 250
    },
    checkbox: {
        marginBottom: 16
    }
};
class App extends Component {

    state = {
        customerArray: [],
        controlledDate: null,
        checked: false,
        value: '',
        serviceOrderNumber: '',
        address: '',
        phone: '',
        contactname: '',
        contactemail: ''
    };
    updateCheck() {
        this.setState((oldState) => {
            return {
                checked: !oldState.checked
            };
        });
    }
    componentDidMount() {

        this.getAllCustomers()

    }

    getAllCustomers = () => {
        API
            .getCustomers()
            .then(res => {
                this.setState({customerArray: res.data})
                console.log(this.state.customerArray)

            })
            .catch(err => console.log(err));
    }
    handleCustomerInfo = event => {

        const person = this
            .state
            .customerArray
            .find(customer => customer.customername === event.target.value)
        this.setState({
            value: event.target.value,
            customername: event.target.value,
            address: person.CustomerInfos[0].address,
            phone: person.CustomerInfos[0].phone,
            contactname: person.CustomerInfos[0].contactName,
            contactemail: person.CustomerInfos[0].contactEmail
        }, () => {
            console.log(this.state)
        })

    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                <Paper zDepth={5} rounded={true}>
                    <SmallJumbo/>
                    </Paper>
                    <p className="text-right">Logged In User:
                    </p>
<Paper zDepth={5}>
                    <div className="form-group">

                        <div className="form-control form-control-lg">
                            <label>Select Customer</label>
                            <select
                                onChange={this.handleCustomerInfo}
                                value={this.state.value}
                                className="form-control form-control-lg">
                                <option defaultValue hidden>Select or Find Customer</option>
                                {this
                                    .state
                                    .customerArray
                                    .map(custname => (
                                        <ListItems key={custname.customername}>
                                            {custname.customername}
                                        </ListItems>
                                    ))}

                            </select>
                        </div>

                        <div className="form-control form-control-lg">
                            <label htmlFor="customerInfo">Customer Information</label>
                            <ListItemsInfo>
                                <p>
                                    Customer Name: {this.state.customername}
                                    <br/>
                                    Address:{this.state.address}
                                    <br/>
                                    Phone:{this.state.phone}
                                    <br/>
                                    Contact Name:{this.state.contactname}
                                    <br/>
                                    Contact Email:{this.state.contactemail}
                                    <br/>
                                </p>
                            </ListItemsInfo>
                            <br/>

                            <TextField
                                className="col-3"
                                id="serviceOrderNumber"
                                placeholder="Service Order #"
                                value={this.state.serviceOrderNumber}
                                onChange={this.handleInputChange}/>
                            <DatePicker
                                className="col-3"
                                hintText="Select Date"
                                value={this.state.controlledDate}
                                onChange={this.handleInputChange}/>
                            <Checkbox
                                className="col-3"
                                label="Simple with controlled value"
                                checked={this.state.checked}
                                onCheck={this
                                .updateCheck
                                .bind(this)}
                                style={styles.checkbox}/>
                        </div>

                        <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                        <Link to={`/NewCustomer`} className="btn btn-lg loginBtn btn-outline-primary">NewCustomer</Link>
                        <Link
                            to={`/newticket`}
                            className="btn btn-lg loginBtn btn-outline-danger float-right">Next</Link>
                    </div>
                    </Paper>
                </div >
            </MuiThemeProvider>
        );
    };
};

export default App;
