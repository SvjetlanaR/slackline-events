import React, { Component } from 'react';
import axios from 'axios';

export default class EventDetails extends Component {

state = { 
  event: null
  
}

getData = () => {
  axios.get(`/api/events/${this.props.match.params.id}`)
    .then(response => {
      console.log(response.data);
      this.setState({
        event: response.data
      })
    })
    .catch(err => {
      console.log(err);
    } )
}

deleteEvent = () => {
  axios.delete(`/api/events/${this.state.event._id}`)
    .then(() => {
      this.props.history.push('/events');
    })
    .catch(err => {
      console.log(err)
    })
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
        <h2>Title: {this.state.event.title} </h2>
        <p>Date: {this.state.event.date} </p>
        <p>Time: {this.state.event.time} </p>
        <p>Description: {this.state.event.description} </p>
        {/* if equipment available, show for how long user will be attending */}
        <p>Equipment: {this.state.event.equipment}</p>
        <p>Duration: {this.state.event.duration }</p>
        <p>Counter/Join: {this.state.event.counter}</p>
        <p>Contact email: {this.state.event.userEmail}</p>
        
        
        {this.props.loggedInUser._id === this.state.event.creator && (<button onClick={this.deleteEvent}>Delete</button>)}
  
      </div>
    )
  }
}
