import React, {Component} from "react";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class LogIn extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    };
    componentDidMount() {}

    renderLoggedIn = () => {

        // window.location = "/loggedin";\
        const validatePassword = document.getElementById('techPassword');
        const validateUser = document.getElementById('techUserName');

        if (this.state.username && this.state.password) {

            API
                .userAuthenticate({username: this.state.username, password: this.state.password})
                .then(user => {

                    window.location = "/loggedin";
                })
                .catch(err => {
                    validateUser.setAttribute('class', 'form-control is-invalid')
                    // alert("Password wrong or Tech does not exist.")
                });
        } else {
            validatePassword.setAttribute('class', 'form-control is-invalid')
            console.log("missing something");
        }
    };

    handleLogin = event => {
        event.preventDefault();
        this.renderLoggedIn();
    };
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };
    handleUserChange = event => {
        
        this.setState({username: event.target.value})
    }
    handlePassword = event => {
        
        this.setState({password: event.target.value})
    }
    showHide = () => {
        const showhidepass = document.getElementById('techPassword');
        if (showhidepass.type === 'password') {
            showhidepass.setAttribute('type', 'text')
        } else {
            showhidepass.setAttribute('type', 'password')
        }
    }
    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <Paper zDepth={5} rounded={false}>
                        <Jumbotron/>
                    </Paper>
                    <div id="user" role="dialog" aria-labelledby="techLogin">
                        <div>
                            <div>
                                <div>
                                    <h5 id="Label">Technician Login</h5>
                                </div>

                                <div>

                                    <div>

                                        <TextField
                                            type="text"
                                            id="techUserName"
                                            hintText="Tech Username"
                                            floatingLabelText="Username"
                                            onChange={this.handleUserChange}
                                            value={this.state.username}
                                            fullWidth={true}/>

                                    </div>

                                    <div className="form-group">

                                        <div className="row">
                                            <div className="col-11">

                                                <TextField
                                                    type="password"
                                                    id="techPassword"
                                                    name="password"
                                                    floatingLabelText="Password"
                                                    hintText="Password"
                                                    onChange={this.handlePassword}
                                                    value={this.state.password}
                                                    fullWidth={true}/>
                                            </div>
                                            <div className="col-1">
                                                <RaisedButton
                                                    className="float-right"
                                                    id="showHideBtn"
                                                    name="showHideBtn"
                                                    onClick={this.showHide}>
                                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                                </RaisedButton>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4">
                                            <Paper zDepth={5} rounded={false}>
                                                <RaisedButton
                                                    href={`/LoggedIn`}
                                                    fullWidth={true}
                                                    backgroundColor="LightBlue"
                                                    onClick={this.handleLogin}>Login</RaisedButton>
                                            </Paper>
                                        </div>
                                        <div className="col-4">
                                            <Paper zDepth={5} rounded={false}>
                                                <RaisedButton
                                                    href={`/NewTech`}
                                                    fullWidth={true}
                                                    backgroundColor="LightGreen"
                                                    >New Technician</RaisedButton>
                                            </Paper>
                                        </div>
                                        <div className="col-4">
                                            <Paper zDepth={5} rounded={false}>
                                                <RaisedButton href={`/`} fullWidth={true} backgroundColor="#607D8B">Home</RaisedButton>
                                            </Paper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default LogIn;