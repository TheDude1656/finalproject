import React, {Component} from 'react';
import '../../App.css';
import API from "../../utils/API";
import Paper from 'material-ui/Paper';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog'

const pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var emailDestination ='';
var docDefinition = '';

class App extends Component {

    state = {
        lastTicket: [],
        pdf: '',
        open: false
    };
    

    componentDidMount(res) {
        this.getLastTicket()
     

    };
    handleOpen=()=>{
        this.setState({open: true})
    };
    handleClose = ()=>{
        this.setState({open: false})
    };

    getLastTicket = () => {

        API
            .getLastTicket()
            .then(res => {
                
                this.setState({lastTicket: res.data[0]})

            })
            .catch(err => console.log(err));
    };

    doTheThing = () => {
       var customerSig = this.refs.customerSignature
        var sigData = this.state.lastTicket.customerSignature
        // console.log(this.state.lastTicket.customerSignature)
        customerSig.fromDataURL(sigData)

    };
sendPDF = () => {
    console.log("sent")
    
    if (this.state.lastTicket.customeremail === null) {
        emailDestination = this.state.lastTicket.contactemail
    } else {
        emailDestination = this.state.lastTicket.customeremail
    }
    pdfMake.createPdf(docDefinition).download(this.state.lastTicket.customername+this.state.lastTicket.servicedate+".pdf");
    window.location.href="mailto:"+emailDestination
}
    generatePDF = () => {
        
     docDefinition = { 
            
            header: {text: 'Hammel Scale of Kansas City INC.', bold: true, alignment: 'center', fontSize: 30},
            content: [
                
                {layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: ['30%', '30%', '*'],
                    body: [
                        ['Service Order Number', "", "Invoice Number"],
                    [this.state.lastTicket.serviceOrderNumber, "", ""],
                    ]},
               },
                {layout: 'lightHorizontalLines',
                table: {
                    headerRows: 1,
                    widths: ['*', '*'],
                    body: [
                        ['Customer', 'Contact'],
                    [this.state.lastTicket.customername, this.state.lastTicket.contactname],
                    [this.state.lastTicket.customeraddress, ""],
                    [this.state.lastTicket.customerphone, this.state.lastTicket.contactphone],
                    [this.state.lastTicket.customeremail, this.state.lastTicket.contactemail]
                    ]},
               }, {layout: 'lightHorizontalLines',
               table: {
                   headerRows: 1,
                   widths: ['33%', '33%', '33%'],
                   body: [
                       ['Person Calling', 'Purchase Order Number', "Service Type"],
                   ["", this.state.lastTicket.poNumber, this.state.lastTicket.serviceType],
                   ]},
              },{layout: 'lightHorizontalLines',
              table: {
                  headerRows: 1,
                  widths: ['auto', 'auto'],
                  body: [
                      ['Special Billing Instructions', 'Service Tech/s'],
                  ["", this.state.lastTicket.insertedByTech],
                  ]},
             },
               {layout: 'lightHorizontalLines',
               table: {
                widths: ['auto', "auto", "auto", "auto", "auto", "auto", "auto"],fontSize: 2,
                body: [
                    ['Date Service Performed', 'Job Start Time', 'Job Stop Time', 'Travel Hours', 'Miles', 'Vehicle', 'Completed'],
                    [this.state.lastTicket.servicedate, this.state.lastTicket.startTime, this.state.lastTicket.stopTime, this.state.lastTicket.travelhours, "", this.state.lastTicket.vehicleUsed, this.state.lastTicket.jobCompleted]
                ], 
            },fontSize: 8},{layout: 'lightHorizontalLines',
            table: {
                headerRows: 1,
                widths: ['auto'],
                body: [
                    ['Service Performed'],
                [this.state.lastTicket.jobDescription],
                ]},
           },
                         
                {image: this.state.lastTicket.customerSignature, width: 300}
                           
           
            ],
            footer: {
                margin: [20, 0, 0, 20],
                columns: [
                    {text: "CSA: "+this.state.lastTicket.id, alignment: 'left'}
                ]
            }
             };
             const pdfDocGenerator = pdfMake.createPdf(docDefinition);
             pdfDocGenerator.getDataUrl((dataUrl) => {
                this.setState({
                    pdf: dataUrl
                })
                this.handleOpen()
                const targetElement = document.getElementById('pdf');
                targetElement.setAttribute('src', dataUrl)
                
               
             });
        
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
                                <RaisedButton label="Email/Save Ticket" backgroundColor="LightBlue" onClick={this.generatePDF}/>
                                <RaisedButton
                                    label="Home"
                                    backgroundColor="LightBlue"
                                    className="float-right"
                                   
                                    href="/"/>
                            </CardActions>
                        </Card>
                      
                    </Paper>
                    <FullscreenDialog
                        title="Generated PDF"
                        id="pdf"
                        type="application/pdf"
                        actionButton={<RaisedButton
                            label='Done'
                            onClick={() => {
                                this.sendPDF()
                                this.setState({ open: false }
                                )}}
                          />}
                        
                        open={this.state.open}
                        
                        >
                    <iframe width="100%" height="100%" id="pdf" title="finishedPDF"/> 
                        
                        </FullscreenDialog>
                    
                </div>
            </MuiThemeProvider>

        );
    };
};

export default App;
