import React, { Component } from "react";

class Misc extends Component {
  render() {
    return (
      <div>
        <button
          hidden={!this.props.Calc2val || !this.props.Calc1val}
          className={this.props.onGetButtonColor(this.props.Calc3val)}
          onClick={this.props.onCalc3Clicked}
        >
          Calc 3
        </button>
        <button
          hidden={
            !this.props.Calc1val ||
            (!this.props.Calc2val && !this.props.Math1172val)
          }
          className={this.props.onGetButtonColor(this.props.STATval)}
          onClick={this.props.onSTAT3470Clicked}
        >
          STAT3470
        </button>
        <button
          hidden={
            !this.props.Calc1val ||
            (!this.props.Math1172val && !this.props.Calc3val)
          }
          className={this.props.onGetButtonColor(this.props.LINALGval)}
          onClick={this.props.onMATH2568Clicked}
        >
          MATH2568
        </button>
        <button
          //TODO: Hidden.
          hidden={false}
          className={this.props.onGetButtonColor(this.props.MATH3345val)}
          onClick={this.props.onMATH3345Clicked}
        >
          MATH3345
        </button>
      </div>
    );
  }
}

export default Misc;
