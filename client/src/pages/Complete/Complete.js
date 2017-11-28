import React, {Component} from "react";
import {Link} from "react-router-dom";
import SignaturePad from "react-signature-pad";
// var SignaturePad = require('react-signature-pad');

class App extends Component {

    render() {
        return (

            <div>
                <div className="container">
                    <SignaturePad clearButton="true" ref="signature"/>
                    <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                </div>
            </div>
        );
    };
};

export default App;
