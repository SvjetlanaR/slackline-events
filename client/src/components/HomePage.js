import React from "react";
import { Link } from "react-router-dom";
import TreeProtection from "./TreeProtection";

export default function Navbar(props) {
  return (
    <div className="homepage">
    <h2>Slackline Events</h2>
    <h4>Don't forget the Tree Protector!</h4> 
    
    <div>
      {/* <img src="/HomePage.png" alt="profilepicture" /> */}
    </div>
      <Link to="/signup">Signup</Link>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
