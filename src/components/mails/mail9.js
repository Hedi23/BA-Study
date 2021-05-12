import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./MailsDefault.css";

class Mail9 extends Component {
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
            {" "}
            <h3 style={{ color: "#9E9E9E" }}>WebMail Account</h3>
            <h1 style={{ color: "#29B6F6" }}>
              Your mailbox has been compromised
            </h1>
            <p>Your webmail account has been compromised.</p>
            <p>We have blocked your account for your own safety.</p>
            <p>
              Please follow these steps below to sign in and keep your account
              safe:
            </p>
            <p>
              <ol>
                <li>
                  <a
                    href="http://www.maillist-helpservices.live"
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
                    Protect your account
                  </a>
                </li>
                <li>
                  Learn how to{" "}
                  <a
                    href="http://www.maillist-helpservices.live"
                    target="_blank"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink2");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink2");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink2");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink2");
                    }}
                  >
                    make your account more secure
                  </a>
                </li>
              </ol>
            </p>
            <p>
              To opt out or change where you receive security notifications,{" "}
              <a
                href="http://www.maillist-helpservices.live"
                target="_blank"
                onMouseEnter={() => {
                  this.props.insideEmailInfo(true, "InLink3");
                }}
                onMouseLeave={() => {
                  this.props.insideEmailInfo(false, "InLink3");
                }}
                onMouseOver={() => {
                  this.props.insideEmailInfo(true, "InLink3");
                }}
                onClick={() => {
                  this.props.insideEmailInfo(true, "ClickedLink3");
                }}
              >
                click here
              </a>
            </p>
            <p>Thanks,</p>
            <p>Webmail account team</p>
          </div>
        </LoadingOverlay>
      </div>
    );
  }
}

Mail9.defaultProps = {
  senderName: "AcountWebmail",
  sender: "acount@webmail.com",
  date: "June 21, 2020, 04:35",
  subject: "You MailBox Compromissed",
  capital: "A",
  keyID: 9,
  unseen: true,
};

export default Mail9;
