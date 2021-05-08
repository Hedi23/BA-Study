import React, { Component } from "react";
import "./MailsDefault.css";

class Mail11 extends Component {
  //Phishing email Red background
  state = {};
  render() {
    return (
      <div>
        <body>
          <p style={{ marginLeft: "13.5pt;" }}>Hello {this.props.userName},</p>

          <p style={{ marginLeft: "13.5pt;" }}>
            Please refer to the vital info I&#39;ve shared with you using Google
            Drive.&nbsp;
          </p>

          <p style={{ marginLeft: "13.5pt;" }}>
            Click{" "}
            <a
              href="http://www.yourlogin-drive.store"
              target="_blank"
              className="background-red"
            >
              http://www.yourlogin-drive.store
            </a>{" "}
            and sign in to view details..
          </p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.5pt" }}>Regards.</p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.5pt" }}>
            CONFIDENTIALITY NOTICE:&nbsp; This e-mail and any transmitted files
            are private and confidential and are solely for the use of the
            recipient(s)&nbsp;to whom it is addressed.&nbsp; Any unauthorized
            review, use, disclosure, distribution or copying of this
            communication is strictly forbidden.&nbsp; If you have received this
            communication in error, please delete and immediately notify the
            sender via the e-mail return address.&nbsp; Thank you for your
            compliance.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>
            Please consider the environment before printing this e-mail.
          </p>

          <p style={{ marginLeft: "13.5pt" }}>&nbsp;</p>

          <p style={{ marginLeft: "13.7pt" }}></p>
        </body>
      </div>
    );
  }
}

Mail11.defaultProps = {
  sender: "drive@google.com",
  date: "June 17, 2020, 05:18",
  subject: "Shared document",
  capital: "G",
  keyID: 11,
  unseen: true,
};

export default Mail11;
