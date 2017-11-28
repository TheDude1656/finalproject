import React, {Component} from "react";
import {Link} from "react-router-dom";
var SignaturePad = require('react-signature-pad');

class App extends Component {

    render() {
        return (

            <div>
                done
                <SignaturePad
                clearButton = "true"
                ref="signature"
                 />
                <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
            </div>
        );
    };
};

export default App;
