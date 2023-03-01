import React, { Component } from "react";
import "./App.css";
import Section from "./components/section";
import CseCore from "./components/cseCore";
import COEHeader from "./components/coeHeader";
import COE from "./components/coe";

class App extends Component {
  state = {
    counters: [
      { id: 1, region: "College Of Engineering" },
      { id: 2, region: "Miscellaneous" },
      { id: 3, region: "CSE Core" },
      { id: 4, region: "POST CSE Core" },
      { id: 5, region: "Specialization" },
    ],

    ENGR1181val: false,
    ENGR1182val: false,
    PHYval: false,
    Calc1val: false,
    Calc2val: false,

    LINALGval: false,
    STATval: false,
    MATHval: false,
    ECE2060: false,

    SW1val: false,
    SW2val: false,
    FN1val: false,
    FN2val: false,
    SYS1val: false,
    SYS2val: false,
    CAPval: false,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Welcome to the CSE advising Website
        </header>
        <b className="App-body">
          Click which classes you have taken or taking currently and the website
          will tell you what classes you can take next
        </b>
        <COEHeader
          key={this.state.counters[0].id}
          region={this.state.counters[0].region}
          className="Region-Formation"
          isEligible={true}
        />
        <COE
          onGetButtonColor={this.getButtonColor}
          Calc1val={this.state.Calc1val}
        />

        <Section
          key={this.state.counters[1].id}
          region={this.state.counters[1].region}
          className="Region-Formation"
        />

        <Section
          key={this.state.counters[2].id}
          region={this.state.counters[2].region}
          className="Region-Formation"
        />
        <CseCore
          key={1}
          onGetButtonColor={this.getButtonColor}
          onSW1Clicked={this.SW1Clicked}
          onSW2Clicked={this.SW2Clicked}
          onFN1Clicked={this.FN1Clicked}
          onFN2Clicked={this.FN2Clicked}
          onSYS1Clicked={this.SYS1Clicked}
          onSYS2Clicked={this.SYS2Clicked}
          onCAPClicked={this.CAPClicked}
          onKey1={this.getKey1()}
          onKey2={this.getKey2()}
          onKey3={this.getKey3()}
          SW1val={this.state.SW1val}
          SW2val={this.state.SW2val}
          FN1val={this.state.FN1val}
          FN2val={this.state.FN2val}
          SYS1val={this.state.SYS1val}
          SYS2val={this.state.SYS2val}
          CAPval={this.state.CAPval}
        />

        <Section
          key={this.state.counters[3].id}
          region={this.state.counters[3].region}
          className="Region-Formation"
        />

        <Section
          key={this.state.counters[4].id}
          region={this.state.counters[4].region}
          className="Region-Formation"
        />
      </div>
    );
  }

  SW1Clicked = () => {
    let x = this.state.SW1val;
    this.setState({ SW1val: !x });
    if (!x) {
      this.setState({
        SW2val: false,
        FN1val: false,
        FN2val: false,
        SYS1val: false,
        SYS2val: false,
        CAPval: false,
      });
    }
  };

  SW2Clicked = () => {
    let x = this.state.SW2val;
    this.setState({ SW2val: !x });

    if (!x) {
      this.setState({
        FN2val: false,
        SYS1val: false,
        SYS2val: false,
        CAPval: false,
      });
    }
  };

  FN1Clicked = () => {
    let x = this.state.FN1val;
    this.setState({ FN1val: !x });

    if (!x) {
      this.setState({
        FN2val: false,
        SYS1val: false,
        SYS2val: false,
        CAPval: false,
      });
    }
  };

  FN2Clicked = () => {
    let x = this.state.FN2val;
    this.setState({ FN2val: !x });

    if (!x) {
      this.setState({
        SYS2val: false,
        CAPval: false,
      });
    }
  };

  SYS1Clicked = () => {
    let x = this.state.SYS1val;
    this.setState({ SYS1val: !x });
    if (!x) {
      this.setState({
        SYS2val: false,
        CAPval: false,
      });
    }
  };

  SYS2Clicked = () => {
    let x = this.state.SYS2val;
    this.setState({ SYS2val: !x });
  };

  CAPClicked = () => {
    let x = this.state.CAPval;
    this.setState({ CAPval: !x });
  };

  getButtonColor = (val) => {
    let x = "btn btn-lg m-2 btn-";
    return (x += val ? "success" : "danger");
  };

  getKey1 = () => {
    return !this.state.SW1val;
  };

  getKey2 = () => {
    return !this.state.FN1val || !this.state.SW2val || !this.state.SW1val;
  };

  getKey3 = () => {
    return (
      !this.state.SYS1val ||
      !this.state.FN2val ||
      !this.state.FN1val ||
      !this.state.SW2val ||
      !this.state.SW1val
    );
  };
}

export default App;
