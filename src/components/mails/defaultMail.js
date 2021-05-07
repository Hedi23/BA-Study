import React, { Component } from "react";
import "./MailsDefault.css";

class DefaultMail extends Component {
  state = {};
  render() {
    return <div onMouseOver={this.props.inEmailText}>
      

    </div>;
  }
}

DefaultMail.defaultProps = {
  senderName: "xxxx",
  sender: "xxxxx",
  date: "August XX, XXXX, XX:XX",
  subject: "xxxxx",
  capital: "xxxxx",
  keyID: 0,
  avatarColor: "xxxx",
  unseen: true,
};

export default DefaultMail;
