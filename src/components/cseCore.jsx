import React, { Component } from "react";

class CseCore extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.onGetButtonColor(this.props.SW1val)}
          onClick={this.props.onSW1Clicked}
        >
          CSE2221 SW1
        </button>
        <br hidden={this.props.onKey1}></br>
        <button
          className={this.props.onGetButtonColor(this.props.SW2val)}
          onClick={this.props.onSW2Clicked}
          hidden={this.props.onKey1}
        >
          CSE2231 SW2
        </button>
        <button
          className={this.props.onGetButtonColor(this.props.FN1val)}
          onClick={this.props.onFN1Clicked}
          hidden={this.props.onKey1}
        >
          CSE2321 Fndn1
        </button>
        <br hidden={this.props.onKey2}></br>
        <button
          className={this.props.onGetButtonColor(this.props.FN2val)}
          onClick={this.props.onFN2Clicked}
          hidden={this.props.onKey2}
        >
          CSE2331 Fndn2
        </button>
        <button
          className={this.props.onGetButtonColor(this.props.SYS1val)}
          onClick={this.props.onSYS1Clicked}
          hidden={this.props.onKey2}
        >
          CSE2421 Systems 1
        </button>

        <br hidden={this.props.onKey3}></br>

        <button
          className={this.props.onGetButtonColor(this.props.SYS2val)}
          onClick={this.props.onSYS2Clicked}
          hidden={this.props.onKey3}
        >
          CSE2431 Systems 2
        </button>

        <button
          className={this.props.onGetButtonColor(this.props.CAPval)}
          onClick={this.props.onCAPClicked}
          hidden={this.props.onKey3}
        >
          CSE390X Capstone
        </button>
      </div>
    );
  }
}

export default CseCore;
