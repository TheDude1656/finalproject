import React, {Component} from "react";
import "./Login.css";

class Login extends Component {

    loginFunction = event => {
        event.preventDefault();
        console.log("login button clicked");
    };

    render() {
        return (
            <div className="container">
                <button
                    type="button"
                    id="loginBtn"
                    data-toggle="modal"
                    data-target="#userModal"
                    className="btn btn-lg col loginBtn btn-outline-primary"
                    onClick={this.loginFunction}>Login</button>
                <br/><br/>
            </div>
        );
    }
}

export default Login;