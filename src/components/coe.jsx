import React, { Component } from "react";

class COE extends Component {
  render() {
    return (
      <div>
        <button className={this.props.onGetButtonColor(this.props.Calc1val)}>
          Calc1
        </button>
      </div>
    );
  }
}

export default COE;
