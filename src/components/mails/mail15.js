import React, { Component } from "react";
import "./MailsDefault.css";

class Mail15 extends Component {
  //Phishing email Red background
  state = {};
  render() {
    return (
      <div>
        {" "}
        <p>
          &nbsp;Hallo von Amazon-Sicherheit,
          <br />
          &nbsp;
          <br />
          Hier ist eine wichtige Nachricht von Amazon.de. Bitte lesen Sie diese
          Nachricht sorgfaeltig durch, da sie Ihr Kundenkonto bei Amazon.de
          betrifft.
          <br />
          &nbsp;
          <br />
          Wir ueberpruefen routinemaessig Kundenkonten. Bei der Pruefung Ihres
          Kundenkontos erhaertete sich leider unser Verdacht, dass ein
          Unberechtigter Zugriff auf dieses hatte.
          <br />
          &nbsp;
          <br />
          Aus diesem Grund haben wir Ihr Kundenkonto voruebergehend gesperrt.
          Niemand kann derzeit auf Ihr Kundenkonto zugreifen, Sie
          eingeschlossen.
          <br />
          &nbsp;
          <br />
          Um Ihr Kundenkonto zu entsperren, sie haben den Link.
          <br />
          &nbsp;
          <br />
          Bitte loggen sie ein und geben Sie Ihre Daten ein.
          <br />
          &nbsp;
          <p>
            <a
              href="http://www.secureservices-amazn.shop"
              class="internal-link"
              className="background-red"
              target="_blank"
            >
              Amazon Secure Service
            </a>
          </p>
          <br />
          Sobald Sie dies tun, werden Sie Ihr Konto wieder verwenden, um
          Produkte auf Amazon Europa zu verkaufen!
          <br />
          &nbsp;
          <br />
          <br />
          Freundliche Muller,
          <br />
          Das Amazon Services Team
          <br />
          &nbsp; <br />
          &nbsp;
          <br />
          Wenn Sie solche E-Mails nicht mehr erhalten mцchten, kцnnen Sie sich
          hier abmelden.
          <br />© 2020 Amazon.com Inc. oder Tochtergesellschaften. Alle Rechte
          vorbehalten. Amazon Services Europe S.а r.l. 5 Rue Plaetis L-2338
          Luxembourg, Handelsregisternummer Luxemburg: B-93815,
          Gesellschaftskapital 37.500 EUR, Gewerbelizenznummer: 100416,
          USt.-Identifikationsnummer Luxemburg: LU 19647148
          <br />
        </p>
      </div>
    );
  }
}

Mail15.defaultProps = {
  senderName: "Amazon Services Team",
  sender: "security@amazon.com",
  date: "Mai 01, 2020, 05:23",
  subject: "Ihr Amazon-Konto wurde ausgesetzt",
  capital: "A",
  keyID: 15,
  avatarColor: "orange",
  unseen: true,
};

export default Mail15;
