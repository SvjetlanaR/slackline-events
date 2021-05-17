import React, { Component } from 'react';
import axios from 'axios';
import EditEvent from './EditEvent';


export default class EventDetails extends Component {

state = { 
  event: null,
  join: false,
  title: '',
  description: '',
  date: '',
  time: '',
  editForm: false
  
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
        time: response.data.time
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

componentDidMount() {
  this.getData();
}

join = () => {
  this.setState ({
    join: !this.state.join
})
}

  render() {
    
    if (!this.state.event) return <h1>Loading..</h1>
    console.log(this.props.loggedInUser)
    console.log(this.state.event.creator)
    return (
      <div>
        <h2>Title: {this.state.event.title} </h2>
        <p>Date: {this.state.event.date} </p>
        <p>Time: {this.state.event.time} </p>
        <p>Description: {this.state.event.description} </p>
        {/* if equipment available, show for how long user will be attending */}
        <p>Equipment: {this.state.event.equipment}</p>
        <p>Duration: {this.state.event.duration }</p>
        <p>Counter: {this.state.event.counter}</p>
        <p>Contact email: {this.state.event.userEmail}</p>
        
        <button onClick={this.join}>{this.state.join ? 'joined' : 'join'}</button>

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
