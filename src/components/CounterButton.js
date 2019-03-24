import React, { Component } from "react";

class Header extends Component {
  state = {
    count: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    if (this.state.count !== nextState.count) {
      return true;
    }

    return false;
  }
  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default Header;
