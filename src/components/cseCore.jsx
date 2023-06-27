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

class CseCore extends Component {
  render() {
    return (
      <div>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="top"
          title={
            <React.Fragment>
              <h6>Intro Programming Courses</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_1223"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Intro to Java"}
              </a>
              <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_1222"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Intro to C++"}
              </a>
              <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_1224"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Intro to Python"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.introJava)}
            onClick={this.props.onIntroJavaClicked}
          >
            CSE122X
          </button>
        </HtmlTooltip>
        <br hidden={!this.props.introJava}></br>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Software I: Software Components</h6>
              <em>{"Credit Hours: "}</em> <b>{"4"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2221"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.SW1val)}
            onClick={this.props.onSW1Clicked}
            hidden={!this.props.introJava}
          >
            CSE2221
          </button>
        </HtmlTooltip>
        <br hidden={this.props.onKey1}></br>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Software II: Software Development and Design</h6>
              <em>{"Credit Hours: "}</em> <b>{"4"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2231"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.SW2val)}
            onClick={this.props.onSW2Clicked}
            hidden={this.props.onKey1}
          >
            CSE2231
          </button>
        </HtmlTooltip>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="right"
          title={
            <React.Fragment>
              <h6>Foundations I: Discrete Structures</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2321"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.FN1val)}
            onClick={this.props.onFN1Clicked}
            hidden={this.props.onKey1 || !this.props.Calc1val}
          >
            CSE2321
          </button>
        </HtmlTooltip>
        <br hidden={this.props.onKey2}></br>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>
                Systems I: Introduction to Low-Level Programming and Computer
                Organization
              </h6>
              <em>{"Credit Hours: "}</em> <b>{"4"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2421"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.SYS1val)}
            onClick={this.props.onSYS1Clicked}
            hidden={this.props.onKey2}
          >
            CSE2421
          </button>
        </HtmlTooltip>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="right"
          title={
            <React.Fragment>
              <h6>Foundations II: Data Structures and Algorithms</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2331"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.FN2val)}
            onClick={this.props.onFN2Clicked}
            hidden={this.props.onKey2 || !this.props.STAT3470val}
          >
            CSE2331
          </button>
        </HtmlTooltip>
        <br hidden={this.props.onKey3}></br>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="bottom"
          title={
            <React.Fragment>
              <h6>Systems II: Introduction to Operating Systems</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/cse_2431"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            className={this.props.onGetButtonColor(this.props.SYS2val)}
            onClick={this.props.onSYS2Clicked}
            hidden={
              !this.props.SYS1val ||
              !this.props.FN1val ||
              !this.props.SW2val ||
              !this.props.SW1val ||
              !this.props.isInCSE ||
              !this.props.introJava
            }
          >
            CSE2431
          </button>
        </HtmlTooltip>
      </div>
    );
  }
}

export default CseCore;
