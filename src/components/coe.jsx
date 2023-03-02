import React, { Component } from "react";

class COE extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onCalc1Clicked}
          className={this.props.onGetButtonColor(this.props.Calc1val)}
        >
          Calc 1
        </button>
        <button
          onClick={this.props.onFE1Clicked}
          className={this.props.onGetButtonColor(this.props.ENGR1181val)}
        >
          ENGR1181
        </button>

        <button
          onClick={this.props.onPHYSClicked}
          className={this.props.onGetButtonColor(this.props.PHYSval)}
        >
          PHYS1250
        </button>

        <button
          onClick={this.props.onSurveyClicked}
          className={this.props.onGetButtonColor(this.props.SVYval)}
        >
          CSE Survey
        </button>

        <br hidden={!this.props.Calc1val && !this.props.ENGR1181val}></br>
        <button
          hidden={!this.props.Calc1val}
          onClick={this.props.onCalc2Clicked}
          className={this.props.onGetButtonColor(this.props.Calc2val)}
        >
          Calc 2
        </button>
        <button
          hidden={!this.props.ENGR1181val}
          onClick={this.props.onFE2Clicked}
          className={this.props.onGetButtonColor(this.props.ENGR1182val)}
        >
          ENGR1182
        </button>
        <br hidden={!this.props.isEligible}></br>
        <button
          hidden={!this.props.isEligible}
          onClick={this.props.onAcceptedClicked}
          className={this.props.onGetButtonColor(this.props.CSEaccval)}
        >
          Accepted to CSE
        </button>
      </div>
    );
  }
}

export default COE;
