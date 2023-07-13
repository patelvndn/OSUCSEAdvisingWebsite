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

class postCore extends Component {
  render() {
    return (
      <HtmlTooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        placement="top"
        title={
          <React.Fragment>
            <h6>Project Classes</h6>
            <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
            <a
              href="https://data-analytics.osu.edu/courses/cse/3901"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Web Applications"}
            </a>
            <br></br>
            <a
              href="https://data-analytics.osu.edu/courses/cse/3902"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Interactive Systems"}
            </a>
            <br></br>
            <a
              href="https://data-analytics.osu.edu/courses/cse/3903"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"System Software"}
            </a>
          </React.Fragment>
        }
      >
        <button
          hidden={this.props.getPostKey}
          onClick={this.props.onCAPClicked}
          className={this.props.onGetButtonColor(this.props.CAPval)}
        >
          CSE390X
        </button>
      </HtmlTooltip>
    );
  }
}

export default postCore;
