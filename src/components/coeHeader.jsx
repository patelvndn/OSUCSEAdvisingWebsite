import React, { Component } from "react";

class COEHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className={this.props.className}>
          {this.props.region}
          <span style={this.styles} className={this.checkEligibilty()}>
            Eligble to apply to CSE
          </span>
        </h2>
      </div>
    );
  }

  styles = {
    fontSize: 15,
    fontWeight: "bolder",
  };

  checkEligibilty() {
    let x = "badge badge-pill m-2 badge-";

    return (x += this.props.isEligible ? "success" : "danger");
  }
}

export default COEHeader;
