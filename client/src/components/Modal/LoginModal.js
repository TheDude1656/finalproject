import React, { Component } from "react";
import { Link } from "react-router-dom";

class LoginModal extends Component {

    state = {
        username: "",
        password: "",
        showModal: true

    };
    componentDidMount() {
        this.setState({ showModal: true });
    }
    verifyLogin = (user) => {
        
    }
    renderLoggedIn = () => {
        console.log("hit");
        console.log(this.state)
        console.log("close");
        this.setState({ showModal: false });
        if (this.state.username && this.state.password) {
            console.log("we did it!");
            this.verifyLogin();
        } else {
            console.log("missing something");
        }
    };

    handleLogin = event => {
        event.preventDefault();
        console.log("logging in!");
        console.log("username:", this.state.username);
        console.log("password:", this.state.password);
        this.renderLoggedIn();
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(this.state);
    };

    render() {

        return (

            <div
                className="modal fade"
                id="userModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="techLoginModal"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="techModalLabel">Technician Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
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
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <Link to={`../NewTech`} className="btn btn-success">New Tech</Link>
                            <Link to={`../LoggedIn`} className="btn btn-primary" onClick={this.handleLogin}>Login</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default LoginModal;