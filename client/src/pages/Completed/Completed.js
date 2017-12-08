import React, {Component} from 'react';
import '../../App.css';
import API from "../../utils/API";
import Paper from 'material-ui/Paper';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {

    state = {
        lastTicket: []
    }

    componentDidMount(res) {
        this.getLastTicket()
      

    }

    getLastTicket = () => {

        API
            .getLastTicket()
            .then(res => {
                
                this.setState({lastTicket: res.data[0]})

            })
            .catch(err => console.log(err));
    }

    doTheThing = () => {
       var customerSig = this.refs.customerSignature
        var sigData = this.state.lastTicket.customerSignature
        console.log(this.state.lastTicket.customerSignature)
        customerSig.fromDataURL(sigData)

    }
    render() {
        
        return (
            <MuiThemeProvider>
                <div className="container">
                    <Paper zDepth={5} rounded={true}>
                        <Jumbotron/>
                    </Paper>
                    <Paper zDepth={5} rounded={true}>
                        <Card>
                            <CardHeader>
                                <CardTitle title="Ticket Verification Information"></CardTitle>
                            </CardHeader>
                            <CardText>
                                CSA Number: {this.state.lastTicket.id}
                                <br/>
                                Customer Name: {this.state.lastTicket.customername}
                                <br/>
                                Customer Address: {this.state.lastTicket.customeraddress}
                                <br/>
                                Customer Phone: {this.state.lastTicket.customerphone}
                                <br/>
                                Customer Email: {this.state.lastTicket.customeremail}
                                <br/>
                                Contact : {this.state.lastTicket.contactname}
                                <br/>
                                Contact Phone: {this.state.lastTicket.contactphone}
                                <br/>
                                Contact Email: {this.state.lastTicket.contactemail}
                                <br/>
                                Service Completed By: {this.state.lastTicket.insertedByTech}
                                <br/>
                                Service Done On: {this.state.lastTicket.servicedate}
                                <br/>
                                Service Order Number: {this.state.lastTicket.serviceOrderNumber}
                                <br/>
                                Travel Hours: {this.state.lastTicket.travelhours}
                                <br/>
                                Job Start Time: {this.state.lastTicket.startTime}
                                <br/>
                                Job Finish Time: {this.state.lastTicket.stopTime}
                                <br/>
                                Vehicle Used On Job: {this.state.lastTicket.vehicleUsed}
                                <br/>
                                Type of Service Performed: {this.state.lastTicket.serviceType}
                                <br/>
                                PO Number: {this.state.lastTicket.poNumber}
                                <br/>
                                Job Completed: {this.state.lastTicket.jobCompleted}
                                <br/>
                                Work Done: {this.state.lastTicket.jobDescription}
                                <br/>
                                Customer Signature: 
                                <br/>
                                
                                <img style={{maxWidth: 700}} alt="customer's sig" src={this.state.lastTicket.customerSignature} />
                                <br/>
                                

                            </CardText>

                            <CardActions>
                                <RaisedButton label="Email/Save Ticket" backgroundColor="LightBlue"/>
                                <RaisedButton
                                    label="Home"
                                    backgroundColor="LightBlue"
                                    className="float-right"
                                    href="/"/>
                            </CardActions>
                        </Card>
                    </Paper>
                </div>
            </MuiThemeProvider>

        );
    };
};

export default App;
