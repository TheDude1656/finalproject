import React, { Component } from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import { Link } from "react-router-dom";
import API from "../../utils/API";


class App extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        password2: ""
    }
    componentDidMount() {
        this.loadNewUser();
    }
    loadNewUser = () => {
        API.getUser()
            .then(res => this.setState({ name: "", email: "", password: "", password2: "" }))
            .catch(err => console.log(err));
    }
    handleNewUser = event => {
        console.log(this.state);
        if (this.state.password === this.state.password2) {
            if (this.state.name && this.state.email && this.state.password) {
                API.createNewTech({
                    name: this.state.name,
                    email: this.state.name,
                    password: this.state.password
                })
                    .then(res => this.loadNewUser())
                    .catch(err => console.log(err));
            }
        } else {
            event.preventDefault();
            alert("Passwords do not match!")
            this.loadNewUser();
        }
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };
    render() {
        return (
            <div className="container">
                <Jumbotron />
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Tech Username"
                        aria-label="Tech-Username"
                        onChange={this.handleInputChange}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="E-Mail"
                        onChange={this.handleInputChange}
                        value={this.state.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        value={this.state.password}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Verify Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        placeholder="Password Again"
                        onChange={this.handleInputChange}
                        value={this.state.password2}
                    />
                </div>
                <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                <Link to={`../LoggedIn`}
                    className="btn btn-lg loginBtn btn-outline-success"
                    onClick={this.handleNewUser}
                >Create</Link>

            </div>

        );
    };
};
export default App;
