import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { logout } from '../services/auth';
import axios from "axios";
import EventList from "./EventList";
import Navbar from './Navbar';

export default class UserPage extends Component {
  state = {
    events: [],
    user: this.props.loggedInUser,
    join: this.props.join
  }

  getData = () => {
    const user = this.state.user;
    axios
      .get("/api/events")
      .then((response) => {
        // console.log(response.data);
        console.log(user);
        
        const filterEvents = response.data.filter(function(event) {
          console.log(event);
          return (event.creator === user._id) 
          
          // return ((event.creator === user.id) || EventDetails.state.join)
       })
    
        this.setState({
          events: filterEvents,

        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.getData();
  }

  handleLogout = () => {
    logout().then(() => {
      this.props.setUser(null);
    });
  };

  render() {
    return (
      <div>
      <Navbar />
        <h2>My Events</h2>
        <h3>List of my events</h3>
        <EventList events ={this.state.events}/>
        <div>
        <Link to='/add-event'>Add Event</Link>
        </div>
        
        
      </div>
    )
  }
}

