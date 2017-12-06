import React, {Component} from 'react';
import '../../App.css';
import API from "../../utils/API";
import SmallJumbo from "../../components/SmallJumbo/SmallJumbo";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import SignaturePad from "react-signature-pad";
import Dialog from 'material-ui/Dialog';

const items = [ < MenuItem key = {
        1
    }
    value = {
        "30 Day PM"
    }
    primaryText = "30 Day PM" />, < MenuItem key = {
        2
    }
    value = {
        "60 Day PM"
    }
    primaryText = "60 Day PM" />, < MenuItem key = {
        3
    }
    value = {
        "90 Day PM"
    }
    primaryText = "90 Day PM" />, < MenuItem key = {
        4
    }
    value = {
        "180 Day PM"
    }
    primaryText = "180 Day PM" />, < MenuItem key = {
        5
    }
    value = {
        "365 Day Pm"
    }
    primaryText = "365 Day Pm" />, < MenuItem key = {
        6
    }
    value = {
        "Service"
    }
    primaryText = "Service" />
];
const customContentStyle = {
    width: '700px',
    maxWidth: 'none',
    height: '600px',
    maxHeight: '600px'
    
};

class App extends Component {

    state = {
        customerArray: [],
        open: false,
        techArray: [],
        travelhours: '',
        serviceDate: null,
        startTime: null,
        stopTime: null,
        vehicleUsed: null,
        poNumber: '',
        machinesServiced: [],
        jobDescription: '',
        techName: '',
        value: '',
        serviceTypeValue: '',
        serviceOrderNumber: '',
        address: '',
        phone: '',
        contactname: '',
        contactemail: '',
        selectedTech: '',
        signature: ''
    };
    updateCheck = (data) => {

        this.setState({vehicleUsed: data.target.value});
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    handleSaveClose = () => {
              
        // signature.clear()
        this.setState({open: false});
    };
    componentDidMount() {

        this.getAllCustomers()
        this.getAllTechs()

    }
    handleServiceTypeChange = (event, index, serviceTypeValue) => this.setState({serviceTypeValue});
    getAllTechs = () => {
        API
            .getUser()
            .then(res => {
                this.setState({techArray: res.data})
            })
            .catch(err => console.log(err));
    }
    getAllCustomers = () => {
        API
            .getCustomers()
            .then(res => {
                this.setState({customerArray: res.data})

            })
            .catch(err => console.log(err));
    }
    handleCustomerInfoChange = (event, index, value) => {
        console.log({value})
        this.setState({value})
    };
    doSomething = () => {
        console.log(this.state);
    }
    handleCustomerInfo = (event, index, value) => {

        const person = this
            .state
            .customerArray
            .find(customer => customer.customername === value)
        this.setState({
            value: value,
            customername: value,
            address: person.CustomerInfos[0].address,
            phone: person.CustomerInfos[0].phone,
            contactname: person.CustomerInfos[0].contactName,
            contactemail: person.CustomerInfos[0].contactEmail
        }, () => {
            console.log(this.state)
        })

    }
    handleDateChange = (event, date) => {
        this.setState({
            serviceDate: date
        }, () => {
            console.log(this.state.serviceDate)
        });

    };
    handleStartTimeChange = (event, time) => {
        this.setState({
            startTime: time
        }, () => {
            console.log(this.state.startTime)
        });

    };
    handleDescription = event => {
        this.setState({jobDescription: event.target.value})
    };
    handleStopTimeChange = (event, time) => {
        this.setState({
            stopTime: time
        }, () => {
            console.log(this.state.stopTime)
        });

    };
    handleInputChangeService = event => {

        this.setState({serviceOrderNumber: event.target.value});
    };
    handletravelhours = (event) => {
        this.setState({travelhours: event.target.value})
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    handlePoChange = event => {
        this.setState({poNumber: event.target.value});
    }
    selectTech = (event, index, value) => {
        console.log(value)
        this.setState({selectedTech: value})
    }

    render() {
        const {serviceTypeValue} = this.state;
        const serviceType = serviceTypeValue;
        
        
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              onClick={this.handleSaveClose}
              
            />,
          ];
      
        return (

            <MuiThemeProvider>
                <div className="container">
                    <Paper zDepth={5} rounded={true}>
                        <SmallJumbo/>
                    </Paper>

                    <Paper zDepth={5}>
                        <div className="form-group">

                            <div className="form-control form-control-lg">

                                <SelectField
                                    floatingLabelText="Select Customer"
                                    value={this.state.value}
                                    onChange={this.handleCustomerInfo}
                                    fullWidth={true}>
                                    {this
                                        .state
                                        .customerArray
                                        .map(custname => (<MenuItem
                                            key={custname.customername}
                                            value={custname.customername}
                                            primaryText={custname.customername}/>))}
                                </SelectField>
                                <FlatButton href={'/NewCustomer'} fullWidth={true} primary={true}>New Customer</FlatButton>

                            </div>
                            <Card>

                                <CardTitle title="Selected Customer Information"/>
                                <CardText>
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
                                </CardText>
                            </Card>

                            <div className="form-control form-control-lg">

                                <div className="row">
                                    <div className="col-4">
                                        <TextField
                                            id="serviceOrderNumber"
                                            placeholder="Service Order #"
                                            value={this.state.serviceOrderNumber}
                                            onChange={this.handleInputChangeService}/>
                                    </div>
                                    <div className="col-4">
                                        <DatePicker
                                            hintText="Select Service Date"
                                            value={this.state.serviceDate}
                                            onChange={this.handleDateChange}/>
                                    </div>
                                    <div className="col-4">
                                        <SelectField
                                            value={this.state.serviceTypeValue}
                                            onChange={this.handleServiceTypeChange}
                                            errorText={!serviceType && 'Select a service'}>
                                            {items}
                                        </SelectField>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-4">
                                        <TimePicker
                                            hintText="Select Start Time"
                                            format="24hr"
                                            minutesStep={5}
                                            value={this.state.startTime}
                                            onChange={this.handleStartTimeChange}/>
                                    </div>
                                    <div className="col-4">
                                        <TimePicker
                                            hintText="Select Stop Time"
                                            format="24hr"
                                            minutesStep={5}
                                            value={this.state.stopTime}
                                            onChange={this.handleStopTimeChange}/>
                                    </div>
                                    <div className="col-4">
                                        <TextField
                                            id="poNumber"
                                            placeholder="Purchase Order #"
                                            value={this.state.poNumber}
                                            onChange={this.handlePoChange}/>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-4">
                                        <SelectField
                                            floatingLabelText="Select Tech"
                                            value={this.state.selectedTech}
                                            onChange={this.selectTech}>
                                            {this
                                                .state
                                                .techArray
                                                .map(techname => (<MenuItem
                                                    key={techname.name}
                                                    value={techname.name}
                                                    primaryText={techname.name}/>))}
                                        </SelectField>
                                    </div>
                                    <div className="col-4">
                                        <Checkbox value="PickUp" onCheck={this.updateCheck} label="PickUp"/>
                                        <Checkbox value="HDTT" onCheck={this.updateCheck} label="HDTT"/>
                                    </div>
                                    <div className="col-4">
                                        <TextField
                                            id="traveltime"
                                            placeholder="Enter Travel Hours"
                                            value={this.state.travelhours}
                                            onChange={this.handletravelhours}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="container">
                                        <TextField
                                            id="jobDescription"
                                            fullWidth={true}
                                            multiLine={true}
                                            placeholder="Enter Job Information / Details"
                                            value={this.state.jobDescription}
                                            onChange={this.handleDescription}/>
                                    </div>
                                </div>
                                <div className="row">
                                <RaisedButton label="Click for customer signature" onClick={this.handleOpen} />
                                <Dialog
                                  title="Customer Signature Below"
                                  actions={actions}
                                  modal={true}
                                  contentStyle={customContentStyle}
                                  open={this.state.open}
                                >
                                  <SignaturePad ref="customerSignature"/>
                                </Dialog>
                              </div>
                            </div>
                            <br/>
                            <div className="container">
                                <RaisedButton href={`/`} primary={true}>Home</RaisedButton>

                                <RaisedButton onClick={this.doSomething} className="float-right" primary={true}>Next</RaisedButton>
                            </div>
                            <br/>

                        </div>
                    </Paper>
                </div>
            </MuiThemeProvider>

        );
    };
};

export default App;