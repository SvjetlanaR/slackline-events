import React, { Component } from "react";
import { signup } from "../services/auth";
import "./styles/Signup.css";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    signup(username, password).then((response) => {
      if (response.message) {
        this.setState({
          message: response.message,
          username: "",
          password: "",
        });
      } else {
        console.log(response);
        this.props.setUser(response);
        this.props.history.push("/events");
      }
    });
  };

  render() {
    return (
      <div id="signupMargin">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password" id="pwLabell">Password: </label>
          <input
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button type="submit">Sign Up</button>
          {this.state.message && <h3>{this.state.message}</h3>}

        </form>
      </div>
    );
  }
}
