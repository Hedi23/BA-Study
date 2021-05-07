import React, { Component } from "react";
import "./MailsDefault.css";

class Mail13 extends Component {
  //phishing email
  state = {};
  render() {
    return (
      <div>
        <body>
          <p>
            Attention: {this.props.userName}
            <br />
            <br />
            <strong>RE: CASE # 97540486</strong>
            <br />
            <br />
            The Better Business Bureau has been recorded the above said
            reclamation from one of your customers in regard to their business
            contacts with you.&nbsp; The detailed description of the
            customer&rsquo;s uneasiness are available by clicking the link
            below.&nbsp; Please pay attention to this question and let us know
            about your judgement as soon as possible.
            <br />
            <br />
            We pleasantly ask you to overview{" "}
            <a
              href="http://www.reportview.work"
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
              APPEAL REPORT
            </a>{" "}
            to reply on this complaint.
            <br />
            <br />
            We await to your prompt rebound.
            <br />
            <br />
            WBR
            <br />
            Mark Andrews
            <br />
            Dispute Consultant
            <br />
            Better Business Bureau
            <br />
            <br />
          </p>
        </body>
      </div>
    );
  }
}

Mail13.defaultProps = {
  sender: "m.andrews@business.com",
  date: "June 06, 2020, 11:25",
  subject: "RE: CASE # 97540486",
  capital: "M",
  keyID: 13,
  unseen: true,
};

export default Mail13;
