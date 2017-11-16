import React from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {Link} from "react-router-dom";


const App = () => (
    <div className="container">
        <Jumbotron />
        <div className="form-group">
            <label htmlFor="techUserName">Username</label>
            <input
                type="text"
                className="form-control"
                id="techUserName"
                name="username"
                placeholder="Tech Username"
                aria-label="Tech-Username"
            // onChange={this.handleInputChange}
            // value={this.state.username}
            />
        </div>
        <div className="form-group">
            <label htmlFor="techPassword">Password</label>
            <input
                type="password"
                className="form-control"
                id="techPassword"
                name="password"
                placeholder="Password"
            // onChange={this.handleInputChange}
            // value={this.state.password}
            />
        </div>
        <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Back</Link>
                            <Link to={`../LoggedIn`} className="btn btn-lg loginBtn btn-outline-success">Create</Link>
                        
    </div>
);

export default App;
