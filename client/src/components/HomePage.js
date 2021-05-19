import React from "react";
import { Link } from "react-router-dom";
import "./styles/HomePage.css";


export default function Navbar(props) {
  return (
    <body id="homepage-bg">
    <div className="homepage">
    <h1>Slackline Events</h1>
    
    <br></br>
    <br></br>
    <div>
      {/* <img src="/HomePage.png" alt="profilepicture" /> */}
    </div>
      <Link to="/signup">Signup</Link>
      <div>
        <Link to="/login">Login</Link>
      </div>

      <h4 id="dontforget">Don't forget to bring a Tree Protector!</h4> 

     
    </div>
    </body>
  );
}
