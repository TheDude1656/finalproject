import React, {Component} from 'react';
import '../../App.css';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Login from "../../components/Login/Login";
import NewTech from "../../components/NewTech/NewTech";
import LoginModal from "../../components/Modal/LoginModal";
// import {ModalLogin} from "../../components/Modal";

class App extends Component {


    render() {
        return (

            <div className="container">
                <Jumbotron/>
                <Login/>
                <NewTech/>
                <LoginModal/>
                
            </div>

        );
    }
}

export default App;
