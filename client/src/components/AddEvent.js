import React, { Component } from "react";
import axios from "axios";


export default class AddEvent extends Component {
  state = {
    title: "",
    date: "",
    description: "",
    equipment: "",
    time: "",
    duration: "",
    location: "",
    counter: "",
    userEmail: ""
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, date, description, equipment, time, duration, location, counter, userEmail
    } = this.state;
    axios
      .post("/api/events", {
        title,
        date,
        description,
        equipment,
        time,
        duration,
        location,
        counter,
        userEmail
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          title: "",
          date: "",
          description: "",
          equipment: "",
          time: "",
          duration: "",
          location: "",
          counter: "",
          userEmail: ""
        });
        this.props.history.push('/events');
        // this.props.getData();
      });
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  
  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
         <label htmlFor="date">Date: </label>
        <input
          type="text"
          name="date"
          id="date"
          value={this.state.date}
          onChange={this.handleChange}
        />
        <br />
         <label htmlFor="time">Time: </label>
        <input
          type="text"
          name="time"
          id="time"
          value={this.state.time}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="eqiupment">Eguipment: </label>
        <input
          type="text"
          name="equipment"
          id="equipment"
          value={this.state.equipment}
          onChange={this.handleChange}
        />
       <br />
        <label htmlFor="duration">Duration: </label>
        <input
          type="text"
          name="duration"
          id="duration"
          value={this.state.duration}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          value={this.state.location}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="counter">Counter: </label>
        <input
          type="text"
          name="counter"
          id="counter"
          value={this.state.counter}
          onChange={this.handleChange}
        />
        <br />
       <label htmlFor="userEmail">Contact Email: </label>
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          value={this.state.userEmail}
          onChange={this.handleChange}
        />
     <br />
          <button type="submit">Create this project</button>
        </form>
      </div>
    );
  }
}
