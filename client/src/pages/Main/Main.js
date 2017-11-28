import React, {Component} from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

import NewTech from "../../components/NewTech/NewTech";


class App extends Component {


    render() {
        return (

            <div className="container">
                <Jumbotron/>
                <Link to={`/login`} className="btn btn-lg loginBtn btn-outline-primary col">Login</Link>
                <br /><br />
                <NewTech/>
                
                
            </div>

        );
    }
}

export default App;
