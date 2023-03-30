import React, { Component } from "react";

class Misc extends Component {
  render() {
    return (
      <div>
        <button
          hidden={!this.props.Calc2val || !this.props.Calc1val}
          className={this.props.onGetOptionalButtonColor(this.props.Calc3val)}
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
            !(
              (this.props.Calc1val && this.props.Math1172val) ||
              this.props.Calc3val ||
              (!this.props.onKey1 && this.props.Calc2val && this.props.FN1val)
            )
          }
          className={this.props.onGetButtonColor(this.props.LINALGval)}
          onClick={this.props.onMATH2568Clicked}
        >
          MATH2568
        </button>
        <button
          hidden={
            !this.props.isEligible ||
            !this.props.Calc1val ||
            !this.props.isInCSE ||
            (!this.props.Calc3val &&
              (this.props.onKey1 ||
                !this.props.FN1val ||
                (!this.props.Calc2val && !this.props.Math1172val)))
          }
          className={this.props.onGetButtonColor(this.props.MATH3345val)}
          onClick={this.props.onMATH3345Clicked}
        >
          MATH3345
        </button>
        <br
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val)
          }
        ></br>
        <button
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val)
          }
          className={this.props.onGetButtonColor(this.props.ECE2060val)}
          onClick={this.props.onECE2060Clicked}
        >
          ECE2060
        </button>

        <button
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val) ||
            this.props.ECE2360val
          }
          className={this.props.onGetButtonColor(this.props.ECE2020val)}
          onClick={this.props.onECE2020Clicked}
        >
          ECE2020
        </button>
        <button
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val) ||
            this.props.ECE2020val
          }
          className={this.props.onGetButtonColor(this.props.ECE2360val)}
          onClick={this.props.onECE2360Clicked}
        >
          ECE2360
        </button>
      </div>
    );
  }
}

export default Misc;
