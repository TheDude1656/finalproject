import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class LogIn extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    };
    componentDidMount() {
    }

    renderLoggedIn = () => {

        // window.location = "/loggedin";\
        const validatePassword = document.getElementById('techPassword');
        const validateUser = document.getElementById('techUserName');

        if (this.state.username && this.state.password) {
          
            API.userAuthenticate({
                username: this.state.username,
                password: this.state.password
            })
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
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
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
                <Jumbotron />
                </Paper>
                <div
                    id="user"
                    role="dialog"
                    aria-labelledby="techLogin"
                >
                    <div>
                        <div>
                            <div>
                                <h5 id="Label">Technician Login</h5>

                            </div>
                            <div>
                                <div className="form-group">
                                    <label htmlFor="techUserName">Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="techUserName"
                                        name="username"
                                        placeholder="Tech Username"
                                        aria-label="Tech-Username"
                                        onChange={this.handleInputChange}
                                        value={this.state.username} />
                                        <div className="invalid-feedback">
                                        Tech does not exist or invalid password supplied.
                                      </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="techPassword">Password</label>
                                    <button
                                        className="btn btn-sm loginBtn btn-outline-danger float-right"
                                        id="showHideBtn"
                                        name="showHideBtn"
                                        onClick={this.showHide}><i className="fa fa-eye" aria-hidden="true"></i></button>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="techPassword"
                                        name="password"
                                        placeholder="Password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password} />
                                        <div className="invalid-feedback">
                                        Please provide a valid password.
                                      </div>
                                </div>
                            </div>
                            <div>
                                <Link to={`../NewTech`} className="btn btn-lg loginBtn btn-outline-success">New Tech</Link>
                                <Link to={`../LoggedIn`} className="btn btn-lg loginBtn btn-outline-primary" onClick={this.handleLogin}>Login</Link>
                                <Link to={'/'} className="btn btn-lg loginBtn btn-outline-danger">Home</Link>
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