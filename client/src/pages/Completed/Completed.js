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
            
            header: {text: 'Hammel Scale of Kansas City INC.\n', bold: true, alignment: 'center', fontSize: 30},
            content: [
                {image: 'data:image/png;base64,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', width: 100, alignment: 'center'},
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
           },{layout: 'lightHorizontalLines',
           table: {
               headerRows: 1,
               widths: ['10%', '20%', '30%', '20%', '15%', '5%'],
               body: [
                   ['Quantity', 'Part Number', 'Description', 'Unit Price', 'Price', ''],
               [' ', ' ', ' ', ' ', ' ', ' '],
               ]},fontSize: 8
          },{layout: 'lightHorizontalLines',
          table: {
              headerRows: 1,
              widths: ['30%', '45%', '15%', '5%', '5%'],
              body: [
                  ['', '', 'Total Parts', '', ''],
                  ['Regular Hours', '@', '', '', ''],
                  ['Overtime Hours', '@', '', '', ''],
                  ['Mileage', '@', '', '', ''],
                  ['Other Expense', '@', '', '', ''],
                  ['', '', 'SubTotal', '', ''],
                  ['', '', 'Tax', '', ''],
                  ['', '', 'Total', '', ''],
              ]},fontSize: 10
         },{layout: 'lightHorizontalLines',
         table: {
             headerRows: 1,
             widths: ['*'],
             body: [
                 [{text:'This service as described has been received', alignment: 'center'}],
                 [{text: '\n\n'}],
                 ['Printed Customers Name'],
                 [{image: this.state.lastTicket.customerSignature, alignment: 'left', width: 300}],
                 ['Customers Signature'],
                 [{text: '\n\n'}],
                 [this.state.lastTicket.insertedByTech],
                 ['Technician']
             ]},
        },
        ],
            footer: {
                margin: [20, 0, 20, 20],
                columns: [
                    {text: "CSA: "+this.state.lastTicket.id, bold: true, alignment: 'left', fontSize: 14, italics: true},
                    {image: 'data:image/png;base64,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', 
                    width: 100, alignment: 'right'}
                    ],
                    
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
