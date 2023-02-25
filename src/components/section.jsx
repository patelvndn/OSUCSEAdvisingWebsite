import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.region}</h2>
      </div>
    );
  }
}

export default Section;
