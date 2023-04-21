import React, { Component } from "react";
import "./App.css";
import Section from "./components/section";
import CseCore from "./components/cseCore";
import COEHeader from "./components/coeHeader";
import COE from "./components/coe";
import Misc from "./components/misc";
import PostCore from "./components/postcore";

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
    PHYSval: false,
    Calc1val: false,
    Calc2val: false,
    Math1172val: false,
    SVYval: false,
    CSEacc: false,
    isInCSE: false,

    Calc3val: false,
    LINALGval: false,
    STATval: false,
    MATH3345val: false,
    ECE2060val: false,
    ECE2020val: false,
    ECE2360val: false,

    introJava: false,
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
          Welcome to the CSE Schedule Planner Website!
        </header>
        <b className="App-body">
          Click which classes you have taken, or taking currently, and the
          website will tell you what classes you can take next.
        </b>
        <COEHeader
          key={this.state.counters[0].id}
          region={this.state.counters[0].region}
          className="Region-Formation"
          isEligible={
            this.state.Calc1val &&
            this.state.ENGR1181val &&
            this.state.ENGR1182val &&
            this.state.PHYSval &&
            this.state.SVYval &&
            this.state.SW1val &&
            this.state.introJava
          }
          Calc1val={this.state.Calc1val}
          PHYSval={this.state.PHYSval}
          ENGR1181val={this.state.ENGR1181val}
          ENGR1182val={this.state.ENGR1182val}
          SVYval={this.state.SVYval}
          SW1val={this.state.SW1val}
          introJava={this.state.introJava}
        />
        <COE
          key={10}
          onGetButtonColor={this.getButtonColor}
          onCalc1Clicked={this.Calc1Clicked}
          onCalc2Clicked={this.Calc2Clicked}
          onMath1172Clicked={this.Math1172Clicked}
          onFE1Clicked={this.FE1Clicked}
          onFE2Clicked={this.FE2Clicked}
          onPHYSClicked={this.PHYSClicked}
          onSurveyClicked={this.SVYClicked}
          onAcceptedClicked={this.AcceptedClicked}
          Calc1val={this.state.Calc1val}
          Calc2val={this.state.Calc2val}
          Math1172val={this.state.Math1172val}
          PHYSval={this.state.PHYSval}
          ENGR1181val={this.state.ENGR1181val}
          ENGR1182val={this.state.ENGR1182val}
          SVYval={this.state.SVYval}
          CSEaccval={this.state.CSEaccval}
          isInCSE={this.state.isInCSE}
          isEligible={
            this.state.Calc1val &&
            this.state.ENGR1181val &&
            this.state.ENGR1182val &&
            this.state.PHYSval &&
            this.state.SVYval &&
            this.state.SW1val &&
            this.state.introJava
          }
        />

        <Section
          key={this.state.counters[1].id}
          region={this.state.counters[1].region}
          className="Region-Formation"
        />
        <Misc
          onGetButtonColor={this.getButtonColor}
          onGetOptionalButtonColor={this.getOptionalButtonColor}
          onCalc3Clicked={this.Calc3Clicked}
          onSTAT3470Clicked={this.STAT3470Clicked}
          onMATH2568Clicked={this.MATH2568Clicked}
          onMATH3345Clicked={this.MATH3345Clicked}
          onECE2060Clicked={this.ECE2060Clicked}
          onECE2020Clicked={this.ECE2020Clicked}
          onECE2360Clicked={this.ECE2360Clicked}
          onKey1={this.getKey1()}
          isInCSE={this.state.isInCSE}
          introJava={this.state.introJava}
          ENGR1181val={this.state.ENGR1181val}
          ENGR1182val={this.state.ENGR1182val}
          Physval={this.state.PHYSval}
          SW1val={this.state.SW1val}
          FN1val={this.state.FN1val}
          Calc1val={this.state.Calc1val}
          Calc2val={this.state.Calc2val}
          Calc3val={this.state.Calc3val}
          Math1172val={this.state.Math1172val}
          STATval={this.state.STATval}
          LINALGval={this.state.LINALGval}
          MATH3345val={this.state.MATH3345val}
          ECE2060val={this.state.ECE2060val}
          ECE2020val={this.state.ECE2020val}
          ECE2360val={this.state.ECE2360val}
          isEligible={
            this.state.Calc1val &&
            this.state.ENGR1181val &&
            this.state.ENGR1182val &&
            this.state.PHYSval &&
            this.state.SVYval &&
            this.state.SW1val &&
            this.state.introJava
          }
        />
        <Section
          key={this.state.counters[2].id}
          region={this.state.counters[2].region}
          className="Region-Formation"
        />
        <CseCore
          key={30}
          onGetButtonColor={this.getButtonColor}
          onSW1Clicked={this.SW1Clicked}
          onSW2Clicked={this.SW2Clicked}
          onFN1Clicked={this.FN1Clicked}
          onFN2Clicked={this.FN2Clicked}
          onSYS1Clicked={this.SYS1Clicked}
          onSYS2Clicked={this.SYS2Clicked}
          onCAPClicked={this.CAPClicked}
          onIntroJavaClicked={this.introJavaClicked}
          onKey1={this.getKey1()}
          onKey2={this.getKey2()}
          onKey3={this.getKey3()}
          introJava={this.state.introJava}
          SW1val={this.state.SW1val}
          SW2val={this.state.SW2val}
          FN1val={this.state.FN1val}
          FN2val={this.state.FN2val}
          SYS1val={this.state.SYS1val}
          SYS2val={this.state.SYS2val}
          CAPval={this.state.CAPval}
          STAT3470val={this.state.STATval}
          Calc1val={this.state.Calc1val}
        />

        <Section
          key={this.state.counters[3].id}
          region={this.state.counters[3].region}
          className="Region-Formation"
        />
        <PostCore
          key={313}
          onGetButtonColor={this.getButtonColor}
          Calc1val={this.state.Calc1val}
          Calc2val={this.state.Calc2val}
          Calc3val={this.state.Calc3val}
          Math1172val={this.state.Math1172val}
          STATval={this.state.STATval}
          LINALGval={this.state.LINALGval}
          MATH3345val={this.state.MATH3345val}
          introJava={this.state.introJava}
          SW1val={this.state.SW1val}
          SW2val={this.state.SW2val}
          FN1val={this.state.FN1val}
          FN2val={this.state.FN2val}
          SYS1val={this.state.SYS1val}
          SYS2val={this.state.SYS2val}
          CAPval={this.state.CAPval}
          STAT3470val={this.state.STATval}
          isInCSE={this.state.isInCSE}
        />

        <Section
          key={this.state.counters[4].id}
          region={this.state.counters[4].region}
          className="Region-Formation"
        />
      </div>
    );
  }

  introJavaClicked = () => {
    let x = this.state.introJava;
    this.setState({ introJava: !x });
    if (!x) {
      this.setState({
        SW1val: false,
        SW2val: false,
        FN1val: false,
        FN2val: false,
        SYS1val: false,
        SYS2val: false,
        CAPval: false,
        CSEaccval: false,
        isInCSE: false,
      });
    }
  };

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
        CSEaccval: false,
        isInCSE: false,
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

    if (
      x === false &&
      this.state.Calc3val === false &&
      this.state.Math1172val !== true
    ) {
      this.setState({ LINALGval: false, MATH3345val: false });
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

  getOptionalButtonColor = (val) => {
    let x = "btn btn-lg m-2 btn-";
    return (x += val ? "success" : "warning");
  };

  getKey1 = () => {
    return !this.state.SW1val || !this.state.introJava;
  };

  getKey2 = () => {
    return (
      !this.state.FN1val ||
      !this.state.SW2val ||
      !this.state.SW1val ||
      !this.state.isInCSE ||
      !this.state.introJava
    );
  };

  getKey3 = () => {
    return (
      !this.state.SYS1val ||
      !this.state.FN2val ||
      !this.state.FN1val ||
      !this.state.SW2val ||
      !this.state.SW1val ||
      !this.state.isInCSE ||
      !this.state.introJava
    );
  };

  Calc1Clicked = () => {
    let x = this.state.Calc1val;
    this.setState({ Calc1val: !x });
    if (!x) {
      this.setState({
        PHYSval: false,
        Calc2val: false,
        Math1172val: false,
        LINALGval: false,
        STATval: false,
        MATH3345val: false,
        CSEaccval: false,
        isInCSE: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
        FN1val: false,
      });
    }
  };

  Calc2Clicked = () => {
    let x = this.state.Calc2val;
    this.setState({ Calc2val: !x });
    if (!x) {
      this.setState({
        isInCSE: false,
        Calc3val: false,
        LINALGval: false,
        STATval: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
      });
    }
  };

  Math1172Clicked = () => {
    let x = this.state.Math1172val;
    this.setState({ Math1172val: !x });
    if (!x) {
      this.setState({
        isInCSE: false,
        Calc3val: false,
        LINALGval: false,
        STATval: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
      });
    }
  };

  FE1Clicked = () => {
    let x = this.state.ENGR1181val;
    this.setState({ ENGR1181val: !x });
    if (x === false) {
      this.setState({
        ENGR1182val: false,
        CSEaccval: false,
        isInCSE: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
      });
    }
  };

  FE2Clicked = () => {
    let x = this.state.ENGR1182val;
    this.setState({ ENGR1182val: !x });
    if (x === false) {
      this.setState({
        CSEaccval: false,
        isInCSE: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
      });
    }
  };

  PHYSClicked = () => {
    let x = this.state.PHYSval;
    this.setState({ PHYSval: !x });
    if (!x) {
      this.setState({
        CSEaccval: false,
        isInCSE: false,
        ECE2020val: false,
        ECE2060val: false,
        ECE2360val: false,
      });
    }
  };

  SVYClicked = () => {
    let x = this.state.SVYval;
    this.setState({ SVYval: !x });
    if (!x) {
      this.setState({
        CSEaccval: false,
        isInCSE: false,
      });
    }
  };

  AcceptedClicked = () => {
    let x = this.state.isInCSE;
    this.setState({ isInCSE: !x });

    if (x === false) {
      this.setState({ MATH3345val: false });
    }
  };

  Calc3Clicked = () => {
    let x = this.state.Calc3val;
    this.setState({ Calc3val: !x });
    if (!x && this.state.FN1val === false) {
      this.setState({ LINALGval: false });
    }
  };

  STAT3470Clicked = () => {
    let x = this.state.STATval;
    this.setState({ STATval: !x });

    if (!x) {
      this.setState({ FN2val: false });
    }
  };

  MATH2568Clicked = () => {
    let x = this.state.LINALGval;
    this.setState({ LINALGval: !x });
  };

  MATH3345Clicked = () => {
    let x = this.state.MATH3345val;
    this.setState({ MATH3345val: !x });
  };

  ECE2060Clicked = () => {
    let x = this.state.ECE2060val;
    this.setState({ ECE2060val: !x });
  };

  ECE2020Clicked = () => {
    let x = this.state.ECE2020val;
    this.setState({ ECE2020val: !x });
  };

  ECE2360Clicked = () => {
    let x = this.state.ECE2360val;
    this.setState({ ECE2360val: !x });
  };
}

export default App;
