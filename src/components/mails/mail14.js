import React, { Component } from "react";
import "./MailsDefault.css";

class Mail14 extends Component {
  //phishing email
  state = {};
  render() {
    return (
      <div>
        <p>
          <img
            alt=""
            src="https://www.underconsideration.com/brandnew/archives/dropbox_2017_logo.png"
            style={{ width: "120px", height: "27px" }}
          />
        </p>

        <title></title>
        {/*<link
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    rel="stylesheet"
  />*/}
        <p>&nbsp;</p>

        <p>Hi {this.props.userName},</p>

        <p>You have a new document/s shared to you via dropbox sharing.</p>

        <p>
          <a
            href="http://www.dropbox-login-for-notification.host"
            target="_blank"
            onMouseEnter={() => {
              this.props.insideEmailInfo(true, "InLink1");
            }}
            onMouseLeave={() => {
              this.props.insideEmailInfo(false, "InLink1");
            }}
            onMouseOver={() => {
              this.props.insideEmailInfo(true, "InLink1");
            }}
            onClick={() => {
              this.props.insideEmailInfo(true, "ClickedLink1");
            }}
          >
            VIEW HERE
          </a>
        </p>

        <p>&nbsp;</p>

        <p>&nbsp;</p>
      </div>
    );
  }
}

Mail14.defaultProps = {
  sender: "info@dropbox.com",
  date: "Mai 12, 2020, 12:43",
  subject: "Droppbox Notification",
  capital: "D",
  keyID: 14,
  unseen: true,
};

export default Mail14;
