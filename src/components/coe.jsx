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

class COE extends Component {
  render() {
    return (
      <div>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Calculus 1</h6>
              <em>{"Credit Hours: "}</em> <b>{"5"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-1151"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            onClick={this.props.onCalc1Clicked}
            className={this.props.onGetButtonColor(this.props.Calc1val)}
          >
            MATH1151
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="top"
          title={
            <React.Fragment>
              <h6>Fundamentals Of Engineering 1</h6>
              <em>{"Credit Hours: "}</em> <b>{"2"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/engr_1181.01"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            onClick={this.props.onFE1Clicked}
            className={this.props.onGetButtonColor(this.props.ENGR1181val)}
          >
            ENGR1181
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="right"
          title={
            <React.Fragment>
              <h6>
                Introduction to Ohio State and Computer Science and Engineering
              </h6>
              <em>{"Credit Hours: "}</em> <b>{"1"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/engr_1100.06"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            onClick={this.props.onSurveyClicked}
            className={this.props.onGetButtonColor(this.props.SVYval)}
          >
            ENGR1100.06
          </button>
        </HtmlTooltip>

        <br hidden={!this.props.Calc1val && !this.props.ENGR1181val}></br>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Calculus 2</h6>
              <em>{"Credit Hours: "}</em> <b>{"5"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-1152"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={!this.props.Calc1val || this.props.Math1172val}
            onClick={this.props.onCalc2Clicked}
            className={this.props.onGetButtonColor(this.props.Calc2val)}
          >
            MATH1152
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement={this.positioning()}
          title={
            <React.Fragment>
              <h6>Engineering Mathematics A</h6>
              <em>{"Credit Hours: "}</em> <b>{"5"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-1172"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={!this.props.Calc1val || this.props.Calc2val}
            onClick={this.props.onMath1172Clicked}
            className={this.props.onGetButtonColor(this.props.Math1172val)}
          >
            MATH1172
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="bottom"
          title={
            <React.Fragment>
              <h6>Fundamentals Of Engineering 2</h6>
              <em>{"Credit Hours: "}</em> <b>{"2"}</b> <br></br>
              <a
                href="https://syllabi.engineering.osu.edu/syllabi/engr_1182.01"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={!this.props.ENGR1181val}
            onClick={this.props.onFE2Clicked}
            className={this.props.onGetButtonColor(this.props.ENGR1182val)}
          >
            ENGR1182
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="right"
          title={
            <React.Fragment>
              <h6>Mechanics, Work and Energy, Thermal Physics</h6>
              <em>{"Credit Hours: "}</em> <b>{"5"}</b> <br></br>
              <a
                href="https://physics.osu.edu/courses/physics-1250"
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={!this.props.Calc1val}
            onClick={this.props.onPHYSClicked}
            className={this.props.onGetButtonColor(this.props.PHYSval)}
          >
            PHYS1250
          </button>
        </HtmlTooltip>
        <br hidden={!this.props.isEligible}></br>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          placement="bottom"
          title={
            <React.Fragment>
              <h6>Click this once you have been admitted to the CSE Major</h6>
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
          <button
            hidden={!this.props.isEligible}
            onClick={this.props.onAcceptedClicked}
            className={this.props.onGetButtonColor(this.props.isInCSE)}
          >
            Accepted to CSE
          </button>
        </HtmlTooltip>
      </div>
    );
  }

  positioning() {
    return this.props.Math1172val ? "left" : "bottom";
  }
}

export default COE;
