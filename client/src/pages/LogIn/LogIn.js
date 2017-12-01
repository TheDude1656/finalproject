import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron/Jumbotron";


class LogIn extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    };
    componentDidMount() {
    }

    renderLoggedIn = () => {

        // window.location = "/loggedin";

        if (this.state.username && this.state.password) {
          
            API.userAuthenticate({
                username: this.state.username,
                password: this.state.password
            })
                .then(user => {
                    
                    window.location = "/loggedin";
                })
                .catch(err => alert("Password wrong or Tech does not exist."));
        } else {
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
            <div className="container">
                <Jumbotron />
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
        )
    }
}

export default LogIn;