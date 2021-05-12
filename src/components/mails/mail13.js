import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./MailsDefault.css";

class Mail13 extends Component {
  //phishing email grey overlay
  state = {
    printMessage: false,
    isActive: true, //overlay modal value
    style: {},
    // alertTemplate: random(1, 3), //use number to decide template
    cssClass: "phishingLink",
    spinner: false,
    email: "",
  };
  setWarning = (e) => {
    e.preventDefault();
    this.setState((previous) => ({
      isActive: !previous.isActive,
    }));
  };
  render() {
    return (
      <div>
        <center style={this.state.style}>
          This email might contain phishing link.
          <br />{" "}
          <button
            type="button"
            className="MuiButtonBase-root MuiButton-root MuiButton-outlined"
            onClick={() => {
              this.setState({ isActive: false });
              this.setState({ style: { display: "none" } });
            }}
          >
            Proceed to email
          </button>
          <br />
        </center>
        <LoadingOverlay
          active={this.state.isActive}
          spinner={this.state.spinner}
          text="This link might be phishing"
        >
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
                reclamation from one of your customers in regard to their
                business contacts with you.&nbsp; The detailed description of
                the customer&rsquo;s uneasiness are available by clicking the
                link below.&nbsp; Please pay attention to this question and let
                us know about your judgement as soon as possible.
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
        </LoadingOverlay>
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
