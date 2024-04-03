import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import User from "../pages/user";
import axios from "axios";
class myRoutes extends Component {
  state = {
    user: {},
  };
  getuser = async (username) => {
    const user = await axios.get(`https://api.github.com/users/${username}`);
    if (user) {
      this.setState({ user: user.data });
    }
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={() => <Home />} />
          <Route exact path='/about' render={() => <About />} />
          <Route
            exact
            path='/user/:username'
            render={(props) => (
              <User
                {...props}
                myusername={this.state.user}
                getuser={this.getuser}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default myRoutes;
