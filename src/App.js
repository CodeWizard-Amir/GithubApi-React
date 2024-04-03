import React, { Component, Fragment } from "react";
import MyRoutes from "./components/Routing/myRoutes";
import "./styles/bootstrap.css";
import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <MyRoutes />
      </Fragment>
    );
  }
}

export default App;
