import React from 'react';
import '../../App.css';

import {Link} from "react-router-dom";

const App = () => (
    <div className="container">
        <p className="text-right">Logged In User: </p>
        <div className="form-group">
        <label>Select Customer</label>
            
            <select className="form-control form-control-lg">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
            </div>
            <div className="form-control form-control-lg">
            <label htmlFor="exampleForm">Example Form</label>
            <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="text"
                placeholder="Enter Text"
            />
            </div>
            <div className="form-control form-control-lg">
             <label htmlFor="exampleForm">Example Form</label>
            <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="text"
                placeholder="Enter Text"
            />
            </div>
            <div className="form-control form-control-lg">
             <label htmlFor="exampleForm">Example Form</label>
            <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="text"
                placeholder="Enter Text"
            />
            </div>
            <div className="form-control form-control-lg">
             <label htmlFor="exampleForm">Example Form</label>
            <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="text"
                placeholder="Enter Text"
            />
            </div>
            <div className="form-control form-control-lg">
             <label htmlFor="exampleForm">Example Form</label>
            <input
                type="text"
                className="form-control"
                id="exampleForm"
                name="text"
                placeholder="Enter Text"
            />
            </div>
            
            
        
            <Link to={`/`} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
            <Link to={`/completedform`} className="btn btn-lg loginBtn btn-outline-primary">Submit</Link>
            
    </div>
    
);

export default App;
