import React from 'react'
import { Link } from "react-router-dom";
import "./styles/Navbar.css";


export default function Navbar() {

  return (
    <nav>
     <h4><Link to="/events">Home Page</Link></h4> 
     <h4><Link to="/user-page" id="eventsLink"> My Events </Link></h4> 
     <h4><Link to="/tree-protection">! Tree Protection</Link></h4>  
    </nav>
  )
}