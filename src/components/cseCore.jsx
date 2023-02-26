import React, { Component } from "react";

class CseCore extends Component {
  render() {
    return (
      <div>
        <button
          className={this.getButtonColor(this.state.SW1val)}
          onClick={this.SW1Clicked}
        >
          CSE2221
        </button>
        <br></br>
        <button
          className={this.getButtonColor(this.state.SW2val)}
          onClick={this.SW2Clicked}
          hidden={this.getKey1()}
        >
          CSE2231
        </button>
        <button
          className={this.getButtonColor(this.state.FN1val)}
          onClick={this.FN1Clicked}
          hidden={this.getKey1()}
        >
          CSE2321
        </button>
        <br></br>
        <button
          className={this.getButtonColor(this.state.FN2val)}
          onClick={this.FN2Clicked}
          hidden={this.getKey2()}
        >
          CSE2331
        </button>
        <button
          className={this.getButtonColor(this.state.SYS1val)}
          onClick={this.SYS1Clicked}
          hidden={this.getKey2()}
        >
          CSE2421
        </button>

        <br></br>

        <button
          className={this.getButtonColor(this.state.SYS2val)}
          onClick={this.SYS2Clicked}
          hidden={this.getKey3()}
        >
          CSE2431
        </button>

        <button
          className={this.getButtonColor(this.state.CAPval)}
          onClick={this.CAPClicked}
          hidden={this.getKey3()}
        >
          CSE390X
        </button>
      </div>
    );
  }
}

export default CseCore;
