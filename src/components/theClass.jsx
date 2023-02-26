import React, { Component } from "react";

class TheClass extends Component {
  render() {
    return (
      <div>
        <button>{this.props.class}</button>
      </div>
    );
  }
}

export default TheClass;
