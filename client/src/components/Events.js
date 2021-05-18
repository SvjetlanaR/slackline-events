import React, { Component } from "react";
import axios from "axios";
import EventList from "./EventList";
import { Link } from 'react-router-dom';
import AddEvent from "./AddEvent";

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

  render() {
    return (
      <div>
      <h2>Welcome to the Slackline Community</h2>
        {/* <AddEvent getData={this.getData} /> */}
        <div>
        <Link to="/user-page">My Events id="eventsLink"</Link>
        </div>
        <div>
        <Link to='/add-event'>Add Event</Link>
        </div>
        <div>
        <h4>All Events:</h4>
        <EventList events={this.state.events} />
        </div>
        <div>
        <Link to="/tree-protection">important! Tree Protection</Link>
        </div>
      </div>
    );
  }
}
