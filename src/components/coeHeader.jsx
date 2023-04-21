import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 300,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

class COEHeader extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className={this.props.className}>
          {this.props.region}
          <HtmlTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            placement="right-start"
            title={
              <React.Fragment>
                <h6>List of Classes required to apply</h6>
                <ul>
                  <li>ENGR 1181 (Fundamentals of Engineering 1)</li>
                  <li>ENGR 1182 (Fundamentals of Engineering 2)</li>
                  <li>ENGR 1100.06 (Engineering Survey)</li>
                  <li>Math 1151 (Calc 1 to take Physics)</li>
                  <li>CSE 122X (to take CSE221)</li>
                  <li>CSE 2221 (a grade of C or better is required)</li>
                  <li>Physics 1250 (to apply to other majors)</li>
                </ul>

                <a
                  href="https://advising.engineering.osu.edu/current-students/applying-your-major"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {"Link for more info"}
                </a>
              </React.Fragment>
            }
          >
            <span style={this.styles} className={this.getColor()}>
              Eligble to apply to CSE
            </span>
          </HtmlTooltip>
        </h2>
      </div>
    );
  }

  styles = {
    fontSize: 15,
    fontWeight: "bolder",
  };

  getColor() {
    let x = "badge m-2 bg-";
    return (x += this.props.isEligible ? "success" : "danger");
  }
}

export default COEHeader;
