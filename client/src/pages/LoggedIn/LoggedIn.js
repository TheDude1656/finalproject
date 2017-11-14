import React from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const App = () => (
    <div className="container">
        <Jumbotron/>
        <form className="form-group">
            <select className="form-control form-control-lg">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
        </form>
    </div>
);

export default App;
