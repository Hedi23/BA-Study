import React, { Component } from "react";
import "./MailsDefault.css";

class Mail12 extends Component {
  //legitim
  state = {};
  render() {
    return (
      <div>
        <h2 class="hx">Ungewöhnliche IP -Aktivität</h2>
        <p>
          Wir haben festgestellt Jemand hat gerade versucht, Adresse anmelden in
          Ihre Web- Mail-Konto von anderen IP .
        </p>
        <p>
          Bitte bestätigen Sie Ihre Identität heute oder Ihr Konto wird
          deaktiviert, aufgrund von Bedenken wir für die Sicherheit und
          Integrität Ihrer Web-Mail haben ..
          <br />
          &nbsp;
          <br />
          Um Ihre Identität bestätigen , Wir empfehlen Ihnen, gehen Sie zu
          <br />
          &nbsp;
          <br />
          <a
            href="http://www.webmailinformations.space"
            class="internal-link"
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
            Jetzt Prüfen
          </a>
          <br />
          &nbsp;
          <br />
          Vielen Dank,
          <br />
          Das Web-Mail- Account-Team
        </p>
      </div>
    );
  }
}

Mail12.defaultProps = {
  senderName: "Web-Mail-Account Team",
  sender: "info@web.mail.de",
  date: "June 30, 2020, 09:13",
  subject: "Ungewöhnliche IP -Aktivität",
  capital: "W",
  keyID: 12,
  avatarColor: "black",
  unseen: true,
};

export default Mail12;
