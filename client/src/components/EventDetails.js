import React, { Component } from 'react';
import axios from 'axios';
import EditEvent from './EditEvent';
import Navbar from './Navbar';

export default class EventDetails extends Component {

state = { 
  event: null,
  title: '',
  description: '',
  date: '',
  time: '',
  editForm: false,
  join: false
  
}

toggleEditForm = () => {
  this.setState((state) => ({
    editForm: !state.editForm
  }))
}

getData = () => {
  axios.get(`/api/events/${this.props.match.params.id}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        event: response.data,
        title: response.data.title,
        description: response.data.description,
        date: response.data.title,
        time: response.data.time,
        join: response.data.join
      })
    })
    .catch(err => {
      console.log(err);
    } )
}

deleteEvent = () => {
  axios.delete(`/api/events/${this.state.event._id}`)
    .then(() => {
      this.props.history.push('/user-page');
    })
    .catch(err => {
      console.log(err)
    })
}

handleChange = e => {
  const { name, value } = e.target;
  this.setState({
    [name]: value
  })
}

handleSubmit = e => {
  const { title, description, date, time } = this.state;
  e.preventDefault();
  axios.put(`/api/events/${this.state.event._id}`, {
    title, 
    description,
    date,
    time
  })
    .then(response => {
      console.log(response)
      this.setState({
        event: response.data,
        title: response.data.title,
        description: response.data.description,
        date: response.data.date,
        time: response.data.time,
        editForm: false
      })
    })
    .catch(err => console.log(err));
}

join = () => {
  axios.post('/api/events/join',{
    event: this.state.event._id,
    userId: this.props.loggedInUser._id
  })
  .then (() => {
    this.setState ({
      join: !this.state.join
  })
  })
  .then(response => {
    console.log(response)
  
  })
  .catch(err => console.log(err));
}

componentDidMount() {
  this.getData();
}

  render() {
    
    if (!this.state.event) return <h1>Loading..</h1>
    console.log(this.props.loggedInUser)
    console.log(this.state.event.creator)
    return (
      <div>
      <Navbar />
        <h2>Title: {this.state.event.title} </h2>
        <p>Date: {this.state.event.date} </p>
        <p>Time: {this.state.event.time} </p>
        <p>Description: {this.state.event.description} </p>
        <p>Equipment: {this.state.event.equipment}</p>
        <p>Duration: {this.state.event.duration }</p>
        <p>Contact email: {this.state.event.userEmail}</p>
        <p>Attending: { this.state.event.join.length} person</p>
        
        
        <button onClick={this.join}>{this.state.join ? 'join' : 'joined'}</button>
        {/* <button onClick={this.join}>Join</button>
        <button onClick={this.joined}>Joined</button>
        */}

        {this.props.loggedInUser._id === this.state.event.creator && (<button onClick={this.deleteEvent}>Delete</button>)}
        {this.props.loggedInUser._id === this.state.event.creator && (<button onClick={this.toggleEditForm}>Show Edit Form</button>)}
        {this.state.editForm && (
          <EditEvent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          /> )}
      </div>
    )
  }
}
