import React, { Component } from "react";
import CounterButton from "./CounterButton";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <di>
        <CounterButton color={"red"} />
        <h1 className="f1">RoboFriends</h1>
      </di>
    );
  }
}

export default Header;
