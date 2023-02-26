import React, { Component } from "react";
import "./App.css";
import Section from "./components/section";

class App extends Component {
  state = {
    counters: [
      { id: 1, region: "College Of Engineering" },
      { id: 2, region: "CSE Core classes" },
      { id: 3, region: "POST CSE Core classes" },
      { id: 4, region: "Specialization classes" },
    ],

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
        {/* <div className="Region-Formation">
          {this.state.counters.map((counter) => (
            <div>
              <Section key={counter.id} region={counter.region} />
              <button className="btn btn-danger btn-sm m-2">
                Fill {counter.region}
              </button>
            </div>
          ))}
        </div> */}
        <Section
          key={this.state.counters[0].id}
          region={this.state.counters[0].region}
          className="Region-Formation"
        />
        <Section
          key={this.state.counters[1].id}
          region={this.state.counters[1].region}
          className="Region-Formation"
        />
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
        <Section
          key={this.state.counters[2].id}
          region={this.state.counters[2].region}
          className="Region-Formation"
        />
        <Section
          key={this.state.counters[3].id}
          region={this.state.counters[3].region}
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
    let x = "btn btn-m m-2 btn-";
    return (x += val ? "success" : "danger");
  };

  getKey1() {
    return !this.state.SW1val;
  }

  getKey2() {
    return !this.state.FN1val || !this.state.SW2val || !this.state.SW1val;
  }

  getKey3() {
    return (
      !this.state.SYS1val ||
      !this.state.FN2val ||
      !this.state.FN1val ||
      !this.state.SW2val ||
      !this.state.SW1val
    );
  }
}

export default App;
