import "./App.css";
import { Route, Switch } from "react-router-dom";
import Events from "./components/Events";
import HomePage from "./components/HomePage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import React from "react";
import AddEvent from "./components/AddEvent";
import EventDetails from "./components/EventDetails";
import TreeProtection from "./components/TreeProtection";
import UserPage from "./components/UserPage";

class App extends React.Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    return (
      <div>
        <Switch>

        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path="/events"
          render={(props) => <Events setUser={this.setUser} {...props} />}
        />
         <Route
          exact
          path="/tree-protection"
          render={(props) => <TreeProtection setUser={this.setUser} {...props} />}
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
        <Route
          exact
          path="/add-event"
          render={(props) => <AddEvent setUser={this.setUser} {...props} />}
        />
        <Route
          exact
          path="/user-page"
          render={(props) => <UserPage setUser={this.setUser} {...props} join={this.state.join} loggedInUser={this.state.user}/>}
        />
        
        <Route
          exact
          path="/events/:id"
          render={(props) => <EventDetails setUser={this.setUser} {...props} loggedInUser={this.state.user}/>}
        />
        </Switch>
      </div>
    );
  }
}

export default App;
