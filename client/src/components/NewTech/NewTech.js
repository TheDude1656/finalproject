import React from "react";
import "./NewTech.css";

const NewTech = () => (
    <div className="container">
        <button type="button" id="newTechBtn"  data-toggle="modal" data-target="#techCreateModal"  className="btn btn-lg btn-outline-primary col newTechBtn">New Tech</button>
    </div>
);

export default NewTech;