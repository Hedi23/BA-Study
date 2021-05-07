import SettingsIcon from "@material-ui/icons/Settings";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

import InfoIcon from "@material-ui/icons/Info";

class ProfileBox extends Component {
  state = {
    proceedingPosib: false,
  };

  componentDidUpdate = () => {
    if (
      this.props.allInboxEmpty === true &&
      this.state.proceedingPosib === false
    ) {
      this.setProceedPos();
    }
  };

  setProceedPos = () => {
    this.setState({ proceedingPosib: true });
  };

  render() {
    return (
      <div style={{ marginLeft: "auto" }}>
        {!this.state.proceedingPosib ? (
          <div>
            <Button
              variant="contained"
              style={{ margin: "5px" }}
              onClick={() => {
                alert("Any Questions: Please contact h.ajimi@campus.lmu.de");
              }}
            >
              {" "}
              <InfoIcon></InfoIcon>
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#8fc994", margin: "10px" }}
              onClick={() => {
                alert("Label all emails before proceeding!");
              }}
            >
              <ExitToAppIcon></ExitToAppIcon>Submit
            </Button>
          </div>
        ) : (
          <div>
            <Link
              to="/SurveyComponent"
              activeClassName="active"
              style={{ width: "380px" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#04B45F", margin: "10px" }}
                onClick={() => {
                  this.props.setInboxResult();
                }}
              >
                <ExitToAppIcon></ExitToAppIcon>Submit
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileBox;
