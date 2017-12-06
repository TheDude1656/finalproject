import React, {Component} from 'react';
import '../../App.css';
import SmallJumbo from "../../components/SmallJumbo/SmallJumbo";
import API from "../../utils/API";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
        API
            .getUser()
            .then(res => this.setState({name: "", email: "", password: "", password2: ""}))
            .catch(err => console.log(err));
    }
    handleNewUser = event => {
        console.log(this.state);
        if (this.state.password === this.state.password2) {
            if (this.state.name && this.state.email && this.state.password) {
                API
                    .createNewTech({name: this.state.name, email: this.state.email, password: this.state.password})
                    .then(res => this.loadNewUser())
                    .catch(err => console.log(err));
            }
        } else {
            event.preventDefault();
            alert("Passwords do not match!")

        }
    };
    handleUserChange = event => {
        this.setState({name: event.target.value})
    };
    handleEmailChange = event => {
        this.setState({email: event.target.value})
    };
    handlePasswordChange = event => {
        this.setState({password: event.target.value})
    }
    handlePassword2Change = event => {
        this.setState({password2: event.target.value})
    }
    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <Paper zDepth={5} rounded={false}>
                        <SmallJumbo/>
                    </Paper>
                    <div className="form-group">
                        <TextField
                            type="text"
                            id="name"
                            hintText="Tech Username"
                            floatingLabelText="Username"
                            onChange={this.handleUserChange}
                            value={this.state.name}
                            fullWidth={true}/>
                    </div>
                    <div className="form-group">
                        <TextField
                            type="text"
                            id="email"
                            hintText="Tech Email"
                            floatingLabelText="Tech E-Mail"
                            onChange={this.handleEmailChange}
                            value={this.state.email}
                            fullWidth={true}/>

                    </div>
                    <div className="form-group">
                        <TextField
                            type="password"
                            id="password"
                            hintText="Tech Password"
                            floatingLabelText="Tech Password"
                            onChange={this.handlePasswordChange}
                            value={this.state.password}
                            fullWidth={true}/>

                    </div>

                    <div className="form-group">
                        <TextField
                            type="password"
                            id="password2"
                            hintText="Tech Password Verification"
                            floatingLabelText="Verify Tech Password"
                            onChange={this.handlePassword2Change}
                            value={this.state.password2}
                            fullWidth={true}/>

                    </div>
                    <div className="row">
                    <div className="col-6">
                    <Paper zDepth={5} rounded={false}>
                        <RaisedButton href={`/`} fullWidth={true} backgroundColor="LightBlue">Home</RaisedButton>
                    </Paper>
                   </div>
                   <div className="col-6">
                    <Paper zDepth={5} rounded={false}>
                        <RaisedButton href={`/LoggedIn`} fullWidth={true} onClick={this.handleNewUser} backgroundColor="">Create</RaisedButton>
                    </Paper>
                    </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    };
};
export default App;
