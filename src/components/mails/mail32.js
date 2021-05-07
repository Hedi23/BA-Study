import React, { Component } from "react";
import "./MailsDefault.css";

class Mail32 extends Component {
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
                    <div style={{ margin: 0, padding: 0 }} bgcolor="#FFFFFF">
                      <table
                        style={{ minWidth: "348px" }}
                        width="100%"
                        height="100%"
                        cellSpacing={0}
                        cellPadding={0}
                        border={0}
                      >
                        <tbody>
                          <tr height="32px" />
                          <tr align="center">
                            <td width="32px" />
                            <td>
                              <table
                                style={{ maxWidth: "600px" }}
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                              >
                                <tbody>
                                  <tr>
                                    <td>
                                      <table
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                        border={0}
                                      >
                                        <tbody>
                                          <tr>
                                            <td align="left">
                                              <img
                                                src="https://ci3.googleusercontent.com/proxy/B8_0hh_kIBprLoT8bCePmfELNuVIhjgLTgDYWEe0RSzHp42ddUTNQ2tizIbDltIQPRrdXBsRm-EWiN3x_tupY9IbCUVKWS__eccUtcIL9n-ix3UoA7owUUXxHj8=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/googlelogo_color_188x64dp.png"
                                                style={{
                                                  display: "block",
                                                  width: "92px",
                                                  height: "32px",
                                                }}
                                                width={92}
                                                height={32}
                                              />
                                            </td>
                                            <td align="right">
                                              <img
                                                style={{
                                                  display: "block",
                                                  width: "32px",
                                                  height: "32px",
                                                }}
                                                src="https://ci5.googleusercontent.com/proxy/MO2mH4DfCy1aO83C5tAUmnz04QAhL1OzllCiKX0uYE8cvUF-tB-GzEyG9utvZf6OTCbpJyJc09xAlNQc0ftAjnjhEFOrIEtR5WA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/keyhole.png"
                                                width={32}
                                                height={32}
                                              />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr height={16} />
                                  <tr>
                                    <td>
                                      <table
                                        style={{
                                          minWidth: "332px",
                                          maxWidth: "600px",
                                          border: "1px solid #f0f0f0",
                                          borderBottom: 0,
                                          borderTopLeftRadius: "3px",
                                          borderTopRightRadius: "3px",
                                        }}
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                        border={0}
                                        bgcolor="#4184F3"
                                      >
                                        <tbody>
                                          <tr>
                                            <td colSpan={3} height="72px" />
                                          </tr>
                                          <tr>
                                            <td width="32px" />
                                            <td
                                              style={{
                                                fontFamily:
                                                  "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                fontSize: "24px",
                                                color: "#ffffff",
                                                lineHeight: "1.25",
                                                minWidth: "300px",
                                              }}
                                            >
                                              Neue Anmeldung in Google Drive auf
                                              "Windows"
                                            </td>
                                            <td width="32px" />
                                          </tr>
                                          <tr>
                                            <td colSpan={3} height="18px" />
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        style={{
                                          minWidth: "332px",
                                          maxWidth: "600px",
                                          border: "1px solid #f0f0f0",
                                          borderBottom: "1px solid #c0c0c0",
                                          borderTop: 0,
                                          borderBottomLeftRadius: "3px",
                                          borderBottomRightRadius: "3px",
                                        }}
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                        border={0}
                                        bgcolor="#FAFAFA"
                                      >
                                        <tbody>
                                          <tr height="16px">
                                            <td rowSpan={3} width="32px" />
                                            <td />
                                            <td rowSpan={3} width="32px" />
                                          </tr>
                                          <tr>
                                            <td>
                                              <table
                                                style={{ minWidth: "300px" }}
                                                cellSpacing={0}
                                                cellPadding={0}
                                                border={0}
                                              >
                                                <tbody>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        fontFamily:
                                                          "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                        fontSize: "13px",
                                                        color: "#202020",
                                                        lineHeight: "1.5",
                                                        paddingBottom: "4px",
                                                      }}
                                                    >
                                                      Hallo{" "}
                                                      {this.props.userName},
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        fontFamily:
                                                          "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                        fontSize: "13px",
                                                        color: "#202020",
                                                        lineHeight: "1.5",
                                                        padding: "4px 0",
                                                      }}
                                                    >
                                                      Ihr Google-Konto{" "}
                                                      <a>
                                                        {this.props.emailAdress}
                                                      </a>{" "}
                                                      wurde gerade für eine
                                                      Anmeldung über{" "}
                                                      <span
                                                        style={{
                                                          whiteSpace: "nowrap",
                                                        }}
                                                      >
                                                        Google Drive
                                                      </span>{" "}
                                                      auf einem{" "}
                                                      <span
                                                        style={{
                                                          whiteSpace: "nowrap",
                                                        }}
                                                      >
                                                        Windows
                                                      </span>
                                                      -Gerät verwendet.
                                                      <table
                                                        style={{
                                                          marginTop: "48px",
                                                          marginBottom: "48px",
                                                        }}
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                        border={0}
                                                      >
                                                        <tbody>
                                                          <tr valign="middle">
                                                            <td width="32px" />
                                                            <td align="center">
                                                              <img
                                                                src="https://ci4.googleusercontent.com/proxy/QpsGaULeBaBhhOTpb-uwGsICda8b1ae95rM7JtYlDtcjbrJ_fDlrGcQ9nUwocVilT_dWdlntnRieTr4GY_IFycf2zxXXuPXiHCdY7G5yRw7uJHHhalp2NYvY=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png"
                                                                style={{
                                                                  width: "48px",
                                                                  height:
                                                                    "48px",
                                                                  display:
                                                                    "block",
                                                                  borderRadius:
                                                                    "50%",
                                                                }}
                                                                width="48px"
                                                                height="48px"
                                                              />
                                                            </td>
                                                            <td width="16px" />
                                                            <td
                                                              style={{
                                                                lineHeight:
                                                                  "1.2",
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontFamily:
                                                                    "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                                  fontSize:
                                                                    "20px",
                                                                  color:
                                                                    "#202020",
                                                                }}
                                                              >
                                                                {
                                                                  this.props
                                                                    .userName
                                                                }
                                                              </span>
                                                              <br />
                                                              <span
                                                                style={{
                                                                  fontFamily:
                                                                    "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                                  fontSize:
                                                                    "13px",
                                                                  color:
                                                                    "#727272",
                                                                }}
                                                              >
                                                                <a>
                                                                  {
                                                                    this.props
                                                                      .emailAdress
                                                                  }
                                                                </a>
                                                              </span>
                                                            </td>
                                                          </tr>
                                                          <tr valign="middle">
                                                            <td
                                                              width="32px"
                                                              height="24px"
                                                            />
                                                            <td
                                                              height="24px"
                                                              align="center"
                                                            >
                                                              <img
                                                                src="https://ci4.googleusercontent.com/proxy/wiLpWJ_Dl_RRn6k7Vwi6jZAiqrqmfnAaVjCZtPC44c_Ig3Aa6DR1PVNyUauAZ9WNY4a6FLeqgkzbTNg2nYOLZpSeUiY5tWXkSHZ5ca8=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/down_arrow.png"
                                                                style={{
                                                                  width: "4px",
                                                                  height:
                                                                    "10px",
                                                                  display:
                                                                    "block",
                                                                }}
                                                                width="4px"
                                                                height="10px"
                                                              />
                                                            </td>
                                                          </tr>
                                                          <tr valign="top">
                                                            <td width="32px" />
                                                            <td align="center">
                                                              <img
                                                                src="https://ci4.googleusercontent.com/proxy/umdWReY9P6SldId_97hYCQZsFbxXZbZYUsDmcRSzOU3Xj4BkyLfbPmi6FBoK5Jkxy5MvC85heeLfPQcbGX5p_Rj3YLV8il9znxG-raG-77yTDwgG_GyHon6SKf-cEYwOTQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/devices/windows_laptop_wallpaper_big.png"
                                                                style={{
                                                                  width: "48px",
                                                                  height:
                                                                    "48px",
                                                                  display:
                                                                    "block",
                                                                }}
                                                                width="48px"
                                                                height="48px"
                                                              />
                                                            </td>
                                                            <td width="16px" />
                                                            <td
                                                              style={{
                                                                lineHeight:
                                                                  "1.2",
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontFamily:
                                                                    "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                                  fontSize:
                                                                    "16px",
                                                                  color:
                                                                    "#202020",
                                                                }}
                                                              >
                                                                Windows
                                                              </span>
                                                              <br />
                                                              <span
                                                                style={{
                                                                  fontFamily:
                                                                    "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                                  fontSize:
                                                                    "13px",
                                                                  color:
                                                                    "#727272",
                                                                }}
                                                              >
                                                                29. July 2020
                                                                12:25 (MEZ)
                                                                <br />
                                                                Deutschland*
                                                                <br />
                                                                Google Drive
                                                              </span>
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                      <b>
                                                        Diese Aktivität ist
                                                        Ihnen nicht bekannt?
                                                      </b>
                                                      <br />
                                                      Sehen Sie sich jetzt die{" "}
                                                      <a
                                                        href="https://accounts.google.com/AccountChooser"
                                                        style={{
                                                          textDecoration:
                                                            "none",
                                                          color: "#4285f4",
                                                        }}
                                                        target="_blank"
                                                        data-saferedirecturl="https://www.google.com/url?hl=de&q=https://accounts.google.com/AccountChooser"
                                                        onMouseEnter={() => {
                                                          this.props.insideEmailInfo(
                                                            true,
                                                            "InLink1"
                                                          );
                                                        }}
                                                        onMouseLeave={() => {
                                                          this.props.insideEmailInfo(
                                                            false,
                                                            "InLink1"
                                                          );
                                                        }}
                                                        onMouseOver={() => {
                                                          this.props.insideEmailInfo(
                                                            true,
                                                            "InLink1"
                                                          );
                                                        }}
                                                        onClick={() => {
                                                          this.props.insideEmailInfo(
                                                            true,
                                                            "ClickedLink1"
                                                          );
                                                        }}
                                                      >
                                                        kürzlich von Ihnen
                                                        genutzten Geräte
                                                      </a>{" "}
                                                      an.
                                                      <br />
                                                      <br />
                                                      Warum erhalten Sie diese
                                                      Nachricht? Die Sicherheit
                                                      Ihres Kontos ist uns sehr
                                                      wichtig. Deshalb möchten
                                                      wir Sie über wichtige
                                                      Vorgänge in Ihrem Konto
                                                      auf dem Laufenden halten.
                                                      <br />
                                                      Wir konnten nicht
                                                      feststellen, ob Sie diesen
                                                      Browser oder dieses Gerät
                                                      schon einmal mit Ihrem
                                                      Konto verwendet haben.
                                                      Dieser Fall kann
                                                      eintreten, wenn Sie sich
                                                      zum ersten Mal auf einem
                                                      neuen Computer, Smartphone
                                                      oder in einem neuen
                                                      Browser anmelden, den
                                                      Inkognitomodus oder den
                                                      Modus für privates Surfen
                                                      in Ihrem Browser aktiviert
                                                      haben, Ihre Cookies
                                                      gelöscht haben oder wenn
                                                      jemand anderes auf Ihr
                                                      Konto zugreift.
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td
                                                      style={{
                                                        fontFamily:
                                                          "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                        fontSize: "13px",
                                                        color: "#202020",
                                                        lineHeight: "1.5",
                                                        paddingTop: "28px",
                                                      }}
                                                    >
                                                      Das Google Konten-Team
                                                    </td>
                                                  </tr>
                                                  <tr height="16px" />
                                                  <tr>
                                                    <td>
                                                      <table
                                                        style={{
                                                          fontFamily:
                                                            "Roboto-Regular,Helvetica,Arial,sans-serif",
                                                          fontSize: "12px",
                                                          color: "#b9b9b9",
                                                          lineHeight: "1.5",
                                                        }}
                                                      >
                                                        <tbody>
                                                          <tr>
                                                            <td>
                                                              * Der Standort ist
                                                              eine ungefähre
                                                              Angabe und wird
                                                              anhand der
                                                              IP-Adresse
                                                              ermittelt, über
                                                              die die Anmeldung
                                                              erfolgt ist.
                                                              <br />
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              Bitte senden Sie
                                                              keine Antworten an
                                                              diese
                                                              E-Mail-Adresse.
                                                              Wenn Sie uns
                                                              Feedback zu dieser
                                                              Warnung geben
                                                              möchten,{" "}
                                                              <a
                                                                href="https://support.google.com/accounts/contact/device_alert_feedback?hl=de"
                                                                style={{
                                                                  textDecoration:
                                                                    "none",
                                                                  color:
                                                                    "#4285f4",
                                                                }}
                                                                target="_blank"
                                                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://support.google.com/accounts/contact/device_alert_feedback?hl%3Dde&source=gmail&ust=1597144021299000&usg=AFQjCNEDhgvEriHQ9rAbSpaCLshv4Tewew"
                                                                onMouseEnter={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "InLink2"
                                                                  );
                                                                }}
                                                                onMouseLeave={() => {
                                                                  this.props.insideEmailInfo(
                                                                    false,
                                                                    "InLink2"
                                                                  );
                                                                }}
                                                                onMouseOver={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "InLink2"
                                                                  );
                                                                }}
                                                                onClick={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "ClickedLink2"
                                                                  );
                                                                }}
                                                              >
                                                                klicken Sie hier
                                                              </a>
                                                              .<br />
                                                              Weitere
                                                              Informationen
                                                              finden Sie in der{" "}
                                                              <a
                                                                href="https://support.google.com/accounts/answer/2733203"
                                                                style={{
                                                                  textDecoration:
                                                                    "none",
                                                                  color:
                                                                    "#4285f4",
                                                                }}
                                                                target="_blank"
                                                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://support.google.com/accounts/answer/2733203&source=gmail&ust=1597144021299000&usg=AFQjCNEEeqfz3xnu4SzgOt1D0xc169tGdw"
                                                                onMouseEnter={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "InLink3"
                                                                  );
                                                                }}
                                                                onMouseLeave={() => {
                                                                  this.props.insideEmailInfo(
                                                                    false,
                                                                    "InLink3"
                                                                  );
                                                                }}
                                                                onMouseOver={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "InLink3"
                                                                  );
                                                                }}
                                                                onClick={() => {
                                                                  this.props.insideEmailInfo(
                                                                    true,
                                                                    "ClickedLink3"
                                                                  );
                                                                }}
                                                              >
                                                                Google
                                                                Konten-Hilfe
                                                              </a>
                                                              .
                                                            </td>
                                                          </tr>
                                                        </tbody>
                                                      </table>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr height="32px" />
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr height={16} />
                                  <tr>
                                    <td
                                      style={{
                                        maxWidth: "600px",
                                        fontFamily:
                                          "Roboto-Regular,Helvetica,Arial,sans-serif",
                                        fontSize: "10px",
                                        color: "#bcbcbc",
                                        lineHeight: "1.5",
                                      }}
                                    />
                                  </tr>
                                  <tr>
                                    <td>
                                      <table
                                        style={{
                                          fontFamily:
                                            "Roboto-Regular,Helvetica,Arial,sans-serif",
                                          fontSize: "10px",
                                          color: "#666666",
                                          lineHeight: "18px",
                                          paddingBottom: "10px",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td>
                                              Mit dieser Servicemitteilung
                                              informieren wir Sie über wichtige
                                              Änderungen bezüglich Ihres
                                              Google-Produkts oder -Kontos.
                                            </td>
                                          </tr>
                                          <tr height="6px" />
                                          <tr>
                                            <td>
                                              <div
                                                style={{
                                                  direction: "ltr",
                                                  textAlign: "left",
                                                }}
                                              >
                                                © 2017 Google Inc., 1600
                                                Amphitheatre Parkway, Mountain
                                                View, CA 94043, USA
                                              </div>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                            <td width="32px" />
                          </tr>
                          <tr height="32px" />
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

Mail32.defaultProps = {
  senderName: "Google",
  sender: "no-reply@accounts.google.com",
  date: "July 29, 2020, 19:17",
  subject: "Neue Anmeldung in Google Drive auf Windows",
  capital: "G",
  keyID: 32,
  avatarColor: "blue",
  unseen: true,
};

export default Mail32;
