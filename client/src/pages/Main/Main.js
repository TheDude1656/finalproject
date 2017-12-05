import React, {Component} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import NewTech from "../../components/NewTech/NewTech";

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">

                    <Paper zDepth={5} rounded={false}>
                        <Jumbotron/>
                    </Paper>

                    <Paper zDepth={5} rounded={true}>
                        <Link to={`/login`} className="btn btn-lg btn-danger col">Login</Link>
                    </Paper>
                    <br/><br/>
                    <Paper zDepth={5} rounded={true}>
                        <NewTech/>
                    </Paper>

                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
