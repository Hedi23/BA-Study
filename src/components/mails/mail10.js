import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import "./MailsDefault.css";

class Mail10 extends Component {
  //phishing email - blocked link and tooltip
  state = {};
  handleClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {" "}
        <p>Attention {this.props.userName},</p>
        <p>
          Due to various emails received by our webmail users of receiving
          pishing spam, COMPANY will be upgrading webmail system to 500MB of
          space.
        </p>
        <p>
          Click{" "}
          <a href="http://www.webmail-upgradeconfirme.cymru" target="_blank">
            <Tooltip
              title="This link is blocked as it might be phishing"
              disableFocusListener
              disableTouchListener
            >
              <Button onClick={this.handleClick}>here</Button>
            </Tooltip>
          </a>{" "}
          to login to your account {this.props.emailAdress} for confirmation and
          upgrade
        </p>
        <hr></hr>
        <p>
          Your account will remain active after you have successfully upgraded
          to the new 500MBs
        </p>
        <p>Thanks for bearing with us,</p>
        <hr></hr>
        <p>IT@COMPANY.com</p>
      </div>
    );
  }
}

Mail10.defaultProps = {
  sender: "IT@company.com",
  date: "February 11, 2020, 06:13",
  subject: "Upgrade WebMail",
  capital: "IT",
  keyID: 10,
  unseen: true,
};

export default Mail10;
