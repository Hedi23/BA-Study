import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./MailsDefault.css";

class Mail14 extends Component {
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
        <LoadingOverlay
          active={this.state.isActive}
          spinner={this.state.spinner}
          text="This link might be phishing"
        >
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
        </LoadingOverlay>
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
