import React from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron/Jumbotron";

const NoMatch = () =>
  
        
        
          <div className="container">
          <Jumbotron />
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
          <Link to={'/'} className="btn btn-lg loginBtn btn-outline-primary">Home</Link>
          </div>
          ;
        

export default NoMatch;
