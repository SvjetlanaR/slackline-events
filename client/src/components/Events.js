import React, { Component } from "react";
import axios from "axios";
import EventList from "./EventList";
import { Link } from 'react-router-dom';
import { logout } from '../services/auth';
import ReactPlayer from 'react-player';
import "./styles/Events.css";
import Navbar from './Navbar'; 

export default class Events extends Component {
  state = {
    events: [],
  };

  getData = () => {
    axios
      .get("/api/events")
      .then((response) => {
        console.log(response.data);
        this.setState({
          events: response.data
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
      <div id="eventsMargin">
      <Navbar/>
      <h2>Welcome to the Slackline Community</h2>
        {/* <AddEvent getData={this.getData} /> */}
        <div>
        <Link to='/add-event' id="addEventLink">Add Event</Link>
        </div>
        <div>
        <h4 id="allEvents">All Events:</h4>
        
        <EventList events={this.state.events} />

        </div>
        <br></br>
        <br></br>
       
        <div id="video">
      <ReactPlayer
          url="https://www.youtube.com/watch?v=obyxQ2FAAbY&t=102s"
          controls
          width= "400px"
          height= "200px"
        />
      
      <ReactPlayer
          url="https://www.youtube.com/watch?v=BqyXmB-4sxQ"
          controls
          width= "400px"
          height= "200px"
        />
      </div>

      <div>
        <Link to='/' onClick={this.handleLogout} id="logOut">Log Out</Link>
        </div>
      </div>
    );
  }
}
