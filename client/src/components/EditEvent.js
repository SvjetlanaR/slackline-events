import React, { Component } from 'react'

export default class EditEvent extends Component {
  render() {
    return (
      <div>
        <h3>Update this Event</h3>
        <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.props.title}
            onChange={this.props.handleChange}
          />
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={this.props.description}
            onChange={this.props.handleChange}
          />
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={this.props.date}
            onChange={this.props.handleChange}
          />
          <label htmlFor="time">Time: </label>
          <input
            type="text"
            id="time"
            name="time"
            value={this.props.time}
            onChange={this.props.handleChange}
          />
          
          <button type="submit">Update</button>
        </form>
      </div>
    )
  }
}