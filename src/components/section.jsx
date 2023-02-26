import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <div>
        <h2 className={this.props.className}>{this.props.region}</h2>
      </div>
    );
  }
}

export default Section;
