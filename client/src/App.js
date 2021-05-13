import "./App.css";
import { Route } from "react-router-dom";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import React from "react";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div className="App">
        <h2>Slackline Events</h2>
        <h4>Don't forget the Tree Protector!</h4>
        <Navbar user={this.state.user} setUser={this.setUser} />
        <ProtectedRoute
          path="/events"
          user={this.state.user}
          component={Events}
          redirectPath="/login"
        />
        <Route
          exact
          path="/signup"
          render={(props) => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;
