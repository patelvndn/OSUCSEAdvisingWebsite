import React, { Component } from "react";

class Misc extends Component {
  render() {
    return (
      <div>
        <button className={this.props.onGetButtonColor(false)}>STAT3470</button>
        <button className={this.props.onGetButtonColor(false)}>MATH2568</button>
        <button className={this.props.onGetButtonColor(false)}>MATH3345</button>
      </div>
    );
  }
}

export default Misc;
