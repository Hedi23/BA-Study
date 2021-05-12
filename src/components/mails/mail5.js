// Mail with blocking layer

import React, { Component } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./MailsDefault.css";

class Mail5 extends Component {
  //second alert
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
            <body>
              <p>Sehr geehrte Kunde,</p>

              <p>Sie haben (1) wichtige Nachricht!</p>

              <p>&nbsp;</p>

              <p>
                Nach mehreren erfolglosen Versuchen, Sie telefonisch &uuml;ber
                den Kundendienst zu erreichen, Wir haben Ihnen eine vertrauliche
                Nachricht in Ihrem Kundenbereich hinterlassen, um Ihren wichtige
                Informationen zu Ihrem Konto mitzuteilen. Wir laden Sie ein, es
                so bald wie m&ouml;glich zu lesen
              </p>

              <p>&nbsp;</p>

              <p>
                <a
                  href="http://www.sparkasseösterreichonline.digital"
                  class="internal-link"
                  target="_blank"
                  data-toggle="modal"
                  data-target="#blockingLinkModal"
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
                  http://www.sparkasseösterreichonline.digital
                </a>
              </p>

              <p>&nbsp;</p>

              <p>Freundliche Gr&uuml;&szlig;e</p>

              <p>Ihre Sparkasse</p>

              <p>&copy;2020 Sparkasse Bank Austria AG&nbsp;</p>
            </body>
          </div>
        </LoadingOverlay>
      </div>
    );
  }
}

Mail5.defaultProps = {
  senderName: "Sparkasse AT",
  sender: "info.security@sparkasse.at",
  date: "June 01, 2020, 03:40",
  subject: "Wichtige Nachricht",
  capital: "S",
  keyID: 5,
  avatarColor: "red",
  unseen: true,
};

export default Mail5;
