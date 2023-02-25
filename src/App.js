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
        <div className="Region-Formation">
          {this.state.counters.map((counter) => (
            <div>
              <Section key={counter.id} region={counter.region} />
              <button className="btn btn-danger btn-sm m-2">
                Fill {counter.region}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
