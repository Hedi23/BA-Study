import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import "./MailsDefault.css";

class Mail3 extends Component {
  //phishing email - blocked link and tooltip
  state = {};
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <p>Dear {this.props.userName},</p>
        <p>
          Someone in Bogotá Colombia attempted to log into your account several
          times. If you believe this was fraudulent activity please report it{" "}
          <a
            href="http://www.office365accountsupport.network"
            target="_blank"
            onClick={() => {
              this.props.insideEmailInfo(true, "ClickedLink1");
            }}
          >
            <Tooltip
              title="This link is blocked as it might be phishing"
              disableFocusListener
              disableTouchListener
            >
              <Button onClick={this.handleClick}>here</Button>
            </Tooltip>
          </a>
          .
        </p>
        <p>
          If you do not believe this to be fraudulent activity you may ignore
          this message
        </p>
        <br />
        <p>Sincerely,</p>
        <p>Office365@COMPANY.com</p>
      </div>
    );
  }
}

Mail3.defaultProps = {
  sender: "Office365@company.com",
  date: "Mai 03, 2020, 06:25",
  subject: "Microsoft Account Issues",
  capital: "O",
  keyID: 3,
  unseen: true,
};

export default Mail3;
