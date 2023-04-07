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

class Misc extends Component {
  render() {
    return (
      <div>
        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Calculus 3</h6>
              <em>{"Credit Hours: "}</em> <b>{"4"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-2153"
                target="_blank"
                rel="noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={!this.props.Calc2val || !this.props.Calc1val}
            className={this.props.onGetOptionalButtonColor(this.props.Calc3val)}
            onClick={this.props.onCalc3Clicked}
          >
            MATH 2153
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="top"
          title={
            <React.Fragment>
              <h6>Introduction to Probability and Statistics for Engineers</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://stat.osu.edu/courses/stat-3470.01"
                target="_blank"
                rel="noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={
              !this.props.Calc1val ||
              (!this.props.Calc2val && !this.props.Math1172val)
            }
            className={this.props.onGetButtonColor(this.props.STATval)}
            onClick={this.props.onSTAT3470Clicked}
          >
            STAT3470
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="top"
          title={
            <React.Fragment>
              <h6>Linear Algebra</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-2568"
                target="_blank"
                rel="noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={
              !this.props.Calc1val ||
              !(
                (this.props.Calc1val && this.props.Math1172val) ||
                this.props.Calc3val ||
                (!this.props.onKey1 && this.props.Calc2val && this.props.FN1val)
              )
            }
            className={this.props.onGetButtonColor(this.props.LINALGval)}
            onClick={this.props.onMATH2568Clicked}
          >
            MATH2568
          </button>
        </HtmlTooltip>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="right"
          title={
            <React.Fragment>
              <h6>Foundations Of Higher Mathematics</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://math.osu.edu/courses/math-3345"
                target="_blank"
                rel="noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={
              !this.props.isEligible ||
              !this.props.Calc1val ||
              !this.props.isInCSE ||
              (!this.props.Calc3val &&
                (this.props.onKey1 ||
                  !this.props.FN1val ||
                  (!this.props.Calc2val && !this.props.Math1172val)))
            }
            className={this.props.onGetButtonColor(this.props.MATH3345val)}
            onClick={this.props.onMATH3345Clicked}
          >
            MATH3345
          </button>
        </HtmlTooltip>
        <br
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val)
          }
        ></br>

        <HtmlTooltip
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
          placement="left"
          title={
            <React.Fragment>
              <h6>Introduction to Digital Logic</h6>
              <em>{"Credit Hours: "}</em> <b>{"3"}</b> <br></br>
              <a
                href="https://ece.osu.edu/sites/default/files/uploads/ece-2060.pdf"
                target="_blank"
                rel="noreferrer"
              >
                {"Link to OSU Website"}
              </a>
            </React.Fragment>
          }
        >
          <button
            hidden={
              !this.props.Calc1val ||
              !this.props.ENGR1181val ||
              !this.props.ENGR1182val ||
              !this.props.Physval ||
              (!this.props.Calc2val && !this.props.Math1172val)
            }
            className={this.props.onGetButtonColor(this.props.ECE2060val)}
            onClick={this.props.onECE2060Clicked}
          >
            ECE2060
          </button>
        </HtmlTooltip>

        <button
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val) ||
            this.props.ECE2360val
          }
          className={this.props.onGetButtonColor(this.props.ECE2020val)}
          onClick={this.props.onECE2020Clicked}
        >
          ECE2020
        </button>
        <button
          hidden={
            !this.props.Calc1val ||
            !this.props.ENGR1181val ||
            !this.props.ENGR1182val ||
            !this.props.Physval ||
            (!this.props.Calc2val && !this.props.Math1172val) ||
            this.props.ECE2020val
          }
          className={this.props.onGetButtonColor(this.props.ECE2360val)}
          onClick={this.props.onECE2360Clicked}
        >
          ECE2360
        </button>
      </div>
    );
  }
}

export default Misc;
