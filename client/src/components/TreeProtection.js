import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Navbar from './Navbar'; 
import "./styles/TreeProtection.css";
import { Link } from 'react-router-dom';



export default class TreeProtection extends Component {
  render() {
    return (
      <div id="protect">
      <Navbar/>
        <h2>Tree Protection </h2>

        <ul>
        <li>
        Tree diameter of at least 30 cm at anchor point, increase the diameter with higher tensions
        </li>
        <li>
        Tree protection under the tree sling, in order to prevent the sling from abrading the bark and distributing the pressure over the uneven surface of the tree
        </li>
        <li>
        Treeslings which are at least 5 cm wide (slings should be spread out behind the tree to increase surface area)
        </li>
        </ul>

        <br></br>
        For more information visit: 
        <br />
        <a href = "https://www.slacklineinternational.org/tree-protection/" target = "_blank" 
rel = "noopener noreferrer">SlacklineInternational Tree Protection</a>
        <br></br>
        <br></br>
        <br></br>
        <div id="protectionvideo">
      <ReactPlayer
          url="https://www.youtube.com/watch?v=uKGTJZeQvxY"
          controls
          width= "400px"
          height= "200px"
        />
      </div>

      <div>
      <Link to='/' onClick={this.handleLogout} id="logOut">Log Out</Link>
      </div>

      </div>
    )
  }
}
