import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { logout } from '../services/auth';

export default class UserPage extends Component {
  state = {
    user: this.props.user
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    return (
      <div>
        
        <h2>My Events</h2>
        <h3>List of my events</h3>
        <div>
        <Link to='/add-event'>Add Event</Link>
        </div>
        <div>
        <Link to="/events">Home Page</Link>
        </div>
        <div>
        <Link to='/' onClick={this.handleLogout}>Log Out</Link>
        </div>
        
      </div>
    )
  }
}

