import React from "react";
import "./NewTech.css";
import { Link } from "react-router-dom";

const NewTech = () => (
    
        <Link to={`../NewTech`} className="btn btn-lg btn-outline-danger col newTechBtn">New Tech</Link>
    
);

export default NewTech;