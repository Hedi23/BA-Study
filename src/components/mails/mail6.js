import React, { Component } from "react";
import "./MailsDefault.css";

class Mail6 extends Component {
  //Phishing email Red background
  state = {};
  render() {
    return (
      <div>
        {" "}
        <p>
          Your email {this.props.emailAdress} has exceeded one or more size
          limits set by the Network Admins. Please click the link below to
          re-validate your email account.
        </p>
        <br></br>
        <a
          href="http://www.outlookcompanyemail.digital"
          class="internal-link"
          target="_blank"
          className="background-red"
        >
          Login to Outlook Web Access
        </a>
        <br></br>
        <p>Thanks for your co-operation.</p>
        <br></br>
        <p>IT</p>
      </div>
    );
  }
}

Mail6.defaultProps = {
  sender: "Outlook@company.com",
  date: "March 12, 2020, 07:38",
  subject: "Your Email Account Size",
  capital: "O",
  keyID: 6,
  unseen: true,
};

export default Mail6;
