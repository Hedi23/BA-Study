import React, { Component } from "react";
import "./MailsDefault.css";

class Mail24 extends Component {
  state = {};
  render() {
    return (
      <div>
        <img
          style={{ maxHeight: "73px", width: "40px" }}
          alt=""
          src="https://ci6.googleusercontent.com/proxy/z0bWF43BJl3HebfvfCsWXqgFHPK3KUsIvSpS6DlrrQ0P_-CGsFTiJkEHtPlwXI73p2bZK9hm6uVCY7HJVg9mMLgvvZZOk8O4pgpwtmN1fJzGzBj4UhBwWqmDfu2KMaI=s0-d-e1-ft#https://cfl.dropboxstatic.com/static/images/emails/logo_glyph_34_m1%402x.png"
          width="40px"
        />
        <table
          style={{ lineHeight: "25px" }}
          cellSpacing={0}
          cellPadding={0}
          border={0}
          align="center"
        >
          <tbody>
            <tr>
              <td colSpan={3} height={30} />
            </tr>
            <tr>
              <td width={36} />
              <td
                style={{
                  color: "#444444",
                  borderCollapse: "collapse",
                  fontSize: "11pt",
                  fontFamily:
                    'proxima_nova,"Open Sans","Lucida Grande","Segoe UI",Arial,Verdana,"Lucida Sans Unicode",Tahoma,"Sans Serif"',
                  maxWidth: "454px",
                }}
                width={454}
                valign="top"
                align="left"
              >
                <p>Hallo {this.props.userName},</p>
                <p>
                  uns ist aufgefallen, dass Sie Ihr Dropbox-Konto seit über
                  einem Jahr nicht mehr genutzt haben. Die Verknüpfung zu allen
                  mit Ihrem Konto verknüpften Geräten wurde in Vorbereitung auf
                  die Kontoschließung aufgehoben.
                </p>
                <p>
                  <strong>Möchten Sie Ihr Dropbox-Konto behalten?</strong>
                  <br />
                  Dann melden Sie sich vor dem 19. August 2020 in Ihrem
                  Dropbox-Konto an.
                </p>
                <center>
                  <a
                    style={{
                      borderRadius: "3px",
                      fontSize: "15px",
                      color: "white",
                      border: "1px #1373b5 solid",
                      textDecoration: "none",
                      padding: "14px 7px 14px 7px",
                      width: "210px",
                      maxWidth: "210px",
                      fontFamily:
                        'proxima_nova,"Open Sans","lucida grande","Segoe UI",arial,verdana,"lucida sans unicode",tahoma,sans-serif',
                      margin: "6px auto",
                      display: "block",
                      backgroundColor: "#007ee6",
                      textAlign: "center",
                    }}
                    href="https://www.dropbox.com/l/AAAUk5A4Ck-G7iMUU4dA29bvh88gtKq3w1Q/login"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.dropbox.com/l/AAAUk5A4Ck-G7iMUU4dA29bvh88gtKq3w1Q/login&source=gmail&ust=1596714726078000&usg=AFQjCNE7AGCSBReJXb_lKK3vJgk2PjvLwA"
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
                    Anmelden, um das Konto weiterzuführen
                    <br />
                  </a>
                </center>
                <p
                  style={{
                    textAlign: "center",
                    fontStyle: "italic",
                    color: "#a8b9c6",
                    fontSize: "11px",
                  }}
                >
                  Klicken Sie auf die Schaltfläche oder rufen Sie{" "}
                  <a
                    href="https://www.dropbox.com/login"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.dropbox.com/login&source=gmail&ust=1596714726078000&usg=AFQjCNFDBl1XwN05SZ4VR67mdqLdsaLWWA"
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
                    https://www.dropbox.com/login
                  </a>{" "}
                  auf.
                </p>
                <h2>
                  Ihr Dropbox-Konto mit der E-Mail-Adresse{" "}
                  <a
                    href={`mailto:${this.props.emailAdress}`}
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
                    {this.props.emailAdress}
                  </a>{" "}
                  wird automatisch geschlossen, wenn Sie sich nicht innerhalb
                  der nächsten 7&nbsp;Tage anmelden.
                </h2>
                <p>
                  <strong>Was passiert danach mit dem Konto?</strong>
                  <br />
                  Sobald Sie das Konto geschlossen haben, können Sie sich nicht
                  mehr anmelden oder neue Geräte damit verknüpfen. All Ihre
                  Daten werden ebenfalls gelöscht.
                </p>
                <p>
                  <strong>
                    Haben Sie Dropbox vor Kurzem verwendet und trotzdem diese
                    E-Mail erhalten?
                  </strong>
                  <br />
                  Wenn Sie Dropbox kürzlich verwendet haben, geht es in dieser
                  E-Mail um ein anderes Konto, das nicht verwendet wird.
                  Vergleichen Sie die E-Mail-Adresse Ihres aktiven Kontos mit
                  der E-Mail-Adresse in dieser E-Mail. Auch wenn in der Adresse
                  nur ein kleines Zeichen wie z.&nbsp;B. ein Punkt fehlt, kann
                  es sich dabei um ein anderes Konto handeln.
                </p>
                <p>
                  <strong>
                    Sie brauchen das Konto und Ihre Daten nicht mehr?
                  </strong>
                  <br />
                  Am 20. Oktober 2020 wird Ihr Konto automatisch geschlossen. In
                  diesem{" "}
                  <a
                    href="https://www.dropbox.com/l/AACf6xEe-1a-SkHza5JLmtGD9XXOnExQKs0/help/9080"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.dropbox.com/l/AACf6xEe-1a-SkHza5JLmtGD9XXOnExQKs0/help/9080&source=gmail&ust=1596714726078000&usg=AFQjCNGvVfQJn_HHVF9in43vChO1jX-0sw"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink4");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink4");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink4");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink4");
                    }}
                  >
                    Hilfeartikel
                  </a>{" "}
                  erfahren Sie außerdem, was Sie vor der Schließung Ihres Kontos
                  tun müssen, um Ihre Dateien zu behalten.
                </p>
                <p>
                  Bei Fragen besuchen Sie unser{" "}
                  <a
                    href="https://www.dropbox.com/l/AACf6xEe-1a-SkHza5JLmtGD9XXOnExQKs0/help/9080"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.dropbox.com/l/AACf6xEe-1a-SkHza5JLmtGD9XXOnExQKs0/help/9080&source=gmail&ust=1596714726078000&usg=AFQjCNGvVfQJn_HHVF9in43vChO1jX-0sw"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink5");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink5");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink5");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink5");
                    }}
                  >
                    Hilfecenter
                  </a>{" "}
                  oder schreiben Sie an{" "}
                  <a
                    href="mailto:inactives-help@dropbox.com"
                    target="_blank"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink6");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink6");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink6");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink6");
                    }}
                  >
                    inactives-help@dropbox.com
                  </a>
                  .
                </p>
                <p>
                  Viele Grüße
                  <br />
                  Das Dropbox-Team
                </p>
                <br />
                <hr />
                <p>
                  <strong>Schützen Sie sich vor Phishing-E-Mails.</strong>
                  <br /> Dropbox wird Sie nie per E-Mail nach Ihrem Kennwort
                  fragen. Wenn Ihnen ein Link in einer E-Mail verdächtig
                  vorkommt, rufen Sie stattdessen direkt die
                  Dropbox-Anmeldeseite auf.{" "}
                  <a
                    href="https://www.dropbox.com/l/AAC7a_HEIEH0JLZrXAU08L0GnYXm-NC-Zcc/help/9113"
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.dropbox.com/l/AAC7a_HEIEH0JLZrXAU08L0GnYXm-NC-Zcc/help/9113&source=gmail&ust=1596714726078000&usg=AFQjCNHRC4n_zcpvkfaDQEbdXYRWGdLkmQ"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink7");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink7");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink7");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink7");
                    }}
                  >
                    {" "}
                    Weitere Informationen zu Phishing und Malware
                  </a>
                </p>
              </td>
              <td width={36} />
            </tr>
            <tr>
              <td colSpan={3} height={36} />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Mail24.defaultProps = {
  senderName: "no-reply@dropboxmail.com",
  sender: "Dropbox",
  date: "June 11, 2020, 13:10",
  subject: "Ihr Dropbox-Konto wird geschlossen – handeln Sie jetzt!",
  capital: "D",
  keyID: 24,
  avatarColor: "blue",
  unseen: true,
};

export default Mail24;
