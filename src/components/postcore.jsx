import React, { Component } from "react";

class postCore extends Component {
  render() {
    return (
      <button
        hidden={!this.props.gpr}
        onClick={this.props.onCAPClicked}
        className={this.props.onGetButtonColor(this.props.CAPval)}
      >
        CSE390X
      </button>
    );
  }
}

export default postCore;
