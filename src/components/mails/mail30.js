import React, { Component } from "react";
import "./MailsDefault.css";

class Mail30 extends Component {
  state = {};
  render() {
    return (
      <div>
        <table width="100%" cellSpacing={0} cellPadding={12} border={0}>
          <tbody>
            <tr>
              <td>
                <div style={{ overflow: "hidden" }}>
                  <font size={-1}>
                    {" "}
                    <u />
                    <div>
                      <table dir="ltr">
                        <tbody>
                          <tr>
                            <td
                              id="m_-38342798258300099i1"
                              style={{
                                padding: 0,
                                fontFamily:
                                  '"Segoe UI Semibold","Segoe UI Bold","Segoe UI","Helvetica Neue Medium",Arial,sans-serif',
                                fontSize: "17px",
                                color: "#707070",
                              }}
                            >
                              Microsoft-Konto
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i2"
                              style={{
                                padding: 0,
                                fontFamily:
                                  '"Segoe UI Light","Segoe UI","Helvetica Neue Medium",Arial,sans-serif',
                                fontSize: "41px",
                                color: "#2672ec",
                              }}
                            >
                              Ihr Kennwort wurde geändert.
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i3"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Ihr Kennwort für das Microsoft-Konto "
                              <a
                                dir="ltr"
                                id="m_-38342798258300099iAccount"
                                className="m_-38342798258300099link"
                                style={{
                                  color: "#2672ec",
                                  textDecoration: "none",
                                }}
                                href="mailto:*******@outlook.de"
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink1"
                                  );
                                }}
                              >
                                *******@outlook.de
                              </a>
                              " wurde am 01.08.2020 08:36 (CET) geändert.
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i4"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Wenn Sie diese Aktion selbst ausgeführt haben,
                              können Sie diese E-Mail ignorieren.
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i5"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Verwendete Sicherheitsinformationen:{" "}
                              <a
                                href={`mailto:${this.props.emailAdress}`}
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink2"
                                  );
                                }}
                              >
                                {this.props.emailAdress}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i6"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Land/Region: Germany
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i7"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Plattform: Windows
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i8"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Browser: Microsoft Edge
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i9"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              IP-Adresse: 138.296.7.1069
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i10"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Wenn Sie diese Aktion nicht selbst ausgeführt
                              haben, ist Ihr Konto gefährdet.&nbsp;Führen Sie
                              die folgenden Schritte aus:
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i11"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              <a
                                id="m_-38342798258300099iLink1"
                                className="m_-38342798258300099link"
                                style={{
                                  color: "#2672ec",
                                  textDecoration: "none",
                                }}
                                href="https://account.live.com/pw"
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/pw&source=gmail&ust=1597143056543000&usg=AFQjCNFVggl1wcNCZQUhqESx74pcNVK4Cw"
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink3"
                                  );
                                }}
                              >
                                1. Setzen Sie Ihr Kennwort zurück.
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i12"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              <a
                                id="m_-38342798258300099iLink4"
                                className="m_-38342798258300099link"
                                style={{
                                  color: "#2672ec",
                                  textDecoration: "none",
                                }}
                                href="https://account.live.com/Proofs/Manage"
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/Proofs/Manage&source=gmail&ust=1597143056543000&usg=AFQjCNGSEXWjsolfB6-BLhY_0Rrio8yJTg"
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink4"
                                  );
                                }}
                              >
                                2. Prüfen Sie Ihre Sicherheitsinformationen.
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i13"
                              style={{
                                padding: 0,
                                paddingTop: "6px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              <a
                                id="m_-38342798258300099iLink2"
                                className="m_-38342798258300099link"
                                style={{
                                  color: "#2672ec",
                                  textDecoration: "none",
                                }}
                                href="http://go.microsoft.com/fwlink/?LinkID=324395"
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=http://go.microsoft.com/fwlink/?LinkID%3D324395&source=gmail&ust=1597143056543000&usg=AFQjCNHxtHU_EDmPqhMwFAn-ELpUR_m-0w"
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink5"
                                  );
                                }}
                              >
                                3. Erfahren Sie, wie Sie Ihr Konto besser
                                absichern.
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i14"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Sie können den Erhalt von
                              Sicherheitsbenachrichtigungen auch{" "}
                              <a
                                id="m_-38342798258300099iLink3"
                                className="m_-38342798258300099link"
                                style={{
                                  color: "#2672ec",
                                  textDecoration: "none",
                                }}
                                href="https://account.live.com/SecurityNotifications/Update"
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/SecurityNotifications/Update&source=gmail&ust=1597143056543000&usg=AFQjCNGm0-YE6UQU9d49M8k2Xg1PHY3J_Q"
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
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink6"
                                  );
                                }}
                              >
                                abbestellen
                              </a>{" "}
                              oder die Empfangsadresse ändern.
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i15"
                              style={{
                                padding: 0,
                                paddingTop: "25px",
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Mit freundlichen Grüßen
                            </td>
                          </tr>
                          <tr>
                            <td
                              id="m_-38342798258300099i16"
                              style={{
                                padding: 0,
                                fontFamily:
                                  '"Segoe UI",Tahoma,Verdana,Arial,sans-serif',
                                fontSize: "14px",
                                color: "#2a2a2a",
                              }}
                            >
                              Ihr Microsoft-Konto-Team
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </font>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Mail30.defaultProps = {
  senderName: "Microsoft-Konto-Team",
  sender: "account-security-noreply@accountprotection.microsoft.com",
  date: "August 01, 2020, 09:48",
  subject: "Änderung des Kennworts für das Microsoft-Konto",
  capital: "M",
  keyID: 30,
  avatarColor: "blue",
  unseen: true,
};

export default Mail30;
