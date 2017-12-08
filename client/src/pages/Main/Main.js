import React, {Component} from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">

                    <Paper zDepth={5} rounded={false}>
                        <Jumbotron/>
                    </Paper>

                    <Paper zDepth={5} rounded={true}>
                        <RaisedButton href={`/login`} fullWidth={true} backgroundColor="LightBlue">Login</RaisedButton>

                    </Paper>
                    <br/>
                    <Paper zDepth={5} rounded={true}>
                        <RaisedButton href={`/newtech`} fullWidth={true}>New Technician</RaisedButton>
                    </Paper>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
