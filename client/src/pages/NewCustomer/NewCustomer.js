import React, { Component } from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";

import API from "../../utils/API";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
customerChange = event => {
    this.setState({customername: event.target.value})
}
customerNumber = event => {
    this.setState({customerNumber: event.target.value})
}
customeremail = event => {
    this.setState({customeremail: event.target.value})
}
customeraddress = event => {
    this.setState({customeraddress: event.target.value})
}
contactname = event => {
    this.setState({contactname: event.target.value})
}
contactphone = event => {
    this.setState({contactphone: event.target.value})
}
contactemail = event => {
    this.setState({contactEmail: event.target.value})
}
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <MuiThemeProvider>
            <div className="container">
            <Paper zDepth={5} rounded={false}>
            <Jumbotron />
                    </Paper>
                
                
                <TextField
                            type="text"
                            id="customername"
                            hintText="Customer's Name"
                            floatingLabelText="Customer's Name"
                            onChange={this.customerChange}
                            value={this.state.customername}
                            fullWidth={true}/>
                   
               
                
                <TextField
                            type="text"
                            id="customerphone"
                            hintText="Customer's Phone"
                            floatingLabelText="Customer's Phone"
                            onChange={this.customerNumber}
                            value={this.state.customerphone}
                            fullWidth={true}/>
                   
                          
                <TextField
                            type="text"
                            id="customeremail"
                            hintText="Customer's E-Mail"
                            floatingLabelText="Customer's E-Mail"
                            onChange={this.customeremail}
                            value={this.state.customeremail}
                            fullWidth={true}/>
                     <TextField
                            type="text"
                            id="customeraddress"
                            hintText="Customer's Address"
                            floatingLabelText="Customer's Address"
                            onChange={this.customeraddress}
                            value={this.state.customeraddress}
                            fullWidth={true}/>
                 <TextField
                            type="text"
                            id="contactname"
                            hintText="Contact's Name"
                            floatingLabelText="Contact's Name"
                            onChange={this.contactname}
                            value={this.state.contactname}
                            fullWidth={true}/>
                
                <TextField
                            type="text"
                            id="contactphone"
                            hintText="Contact's Phone"
                            floatingLabelText="Contact's Phone"
                            onChange={this.contactphone}
                            value={this.state.contactphone}
                            fullWidth={true}/>
                <TextField
                            type="text"
                            id="contactEmail"
                            hintText="Contact's E-Mail"
                            floatingLabelText="Contact's E-Mail"
                            onChange={this.contactemail}
                            value={this.state.contactEmail}
                            fullWidth={true}/>
                
                                
                <div className="row">
                    <div className="col-4">
                    <Paper zDepth={5} rounded={false}>
                        <RaisedButton href={`/`} fullWidth={true} backgroundColor="LightBlue">Home</RaisedButton>
                    </Paper>
                   </div>
                   <div className="col-4">
                    <Paper zDepth={5} rounded={false}>
                        <RaisedButton href={`/LoggedIn`} fullWidth={true} onClick={this.handleNewCustomer} backgroundColor="">Create</RaisedButton>
                    </Paper>
                    </div>
                    <div className="col-4">
                    <Paper zDepth={5} rounded={false}>
                        <RaisedButton href={`/LoggedIn`} fullWidth={true} backgroundColor="LightBlue">Back</RaisedButton>
                    </Paper>
                    </div>
                    </div>
                    

            </div>
            </MuiThemeProvider>
        );
    };
};
export default App;
