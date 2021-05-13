import React, { Component } from "react";
import axios from "axios";
import EventList from "./EventList";
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
          events: response.data,
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
        <AddEvent getData={this.getData} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}
