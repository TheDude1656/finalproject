import React, { Component } from 'react';
import '../../App.css';

import SmallJumbo from "../../components/SmallJumbo/SmallJumbo";
import {ListItemsInfo} from "../../components/List/ListItemsInfo";
import { Link } from "react-router-dom";

class App extends Component {

    state = {
        
    };
    componentDidMount() {

            }
  

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="container">
                <SmallJumbo />
                <p className="text-right">Logged In User:
                </p>
<div className="form-group">
                <div className="form-control form-control-lg">
                        <label htmlFor="customerInfo">Selected Customer Information</label>
                        <ListItemsInfo>
                            <p>
                                Customer Name: {this.state.customername}
                                <br />
                                Address:{this.state.address}
                                <br />
                                Phone:{this.state.phone}
                                <br />
                                Contact Name:{this.state.contactname}
                                <br />
                                Contact Email:{this.state.contactemail}
                                <br />
                            </p>
                        </ListItemsInfo>
</div>
                    </div>
                    <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
                    <Link to={`/completedform`} className="btn btn-lg loginBtn btn-outline-danger float-right">Next</Link>
                </div>
            
        );
    };
};

export default App;
