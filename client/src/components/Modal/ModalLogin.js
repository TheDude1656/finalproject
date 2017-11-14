import React from "react";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";

export const ModalLogin = props => 
    <div>
<Modal show={props.showModal} onHide={props.close}>
<Modal.Header closeButton>
<Modal.Title>Technician Login</Modal.Title>
</Modal.Header>
<Modal.Body>
<div className="form-group">
<label htmlFor="techUserName">Username</label>
<input
    type="text"
    className="form-control"
    id="techUserName"
    name="username"
    placeholder="Tech Username"
    aria-label="Tech-Username"
    onChange={this.handleInputChange}
    value={this.state.username}/>
</div>
<div className="form-group">
<label htmlFor="techPassword">Password</label>
<input
    type="password"
    className="form-control"
    id="techPassword"
    name="password"
    placeholder="Password"
    onChange={this.handleInputChange}
    value={this.state.password}/>
</div>
</Modal.Body>
<Modal.Footer>
<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
<Link to={`../NewTech`} className="btn btn-success">New Tech</Link>
<Link to={`../LoggedIn`} className="btn btn-primary" onClick={this.handleLogin}>Login</Link>
</Modal.Footer>
</Modal>
</div>;
