import React, { Component } from "react";
import "./MailsDefault.css";

class Mail29 extends Component {
  state = {};
  render() {
    return (
      <div>
        <table
          style={{ minWidth: "348px" }}
          width="100%"
          lang="en"
          height="100%"
          cellSpacing={0}
          cellPadding={0}
          border={0}
        >
          <tbody>
            <tr style={{ height: "32px" }} height={32}>
              <td />
            </tr>
            <tr align="center">
              <td>
                <div>
                  <div />
                </div>
                <table
                  style={{
                    paddingBottom: "20px",
                    maxWidth: "516px",
                    minWidth: "220px",
                  }}
                  cellSpacing={0}
                  cellPadding={0}
                  border={0}
                >
                  <tbody>
                    <tr>
                      <td style={{ width: "8px" }} width={8} />
                      <td>
                        <div
                          style={{
                            borderStyle: "solid",
                            borderWidth: "thin",
                            borderColor: "#dadce0",
                            borderRadius: "8px",
                            padding: "40px 20px",
                          }}
                          className="m_-488723823095496125mdv2rw"
                          align="center"
                        >
                          <img
                            src="https://ci5.googleusercontent.com/proxy/T_zJ7UbaC9x27OP4-ZCPfDipqYLSGum30AlaxEycVclfvxO8Cze0sZ0kCrXlx6a-MgvW2tswbIyiNVfczjDuGh9okorzC5SUJDfwkHr6-3j1KUu94HuAw5uxM_jaElQef3Sub84=s0-d-e1-ft#https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_color_74x24dp.png"
                            aria-hidden="true"
                            style={{ marginBottom: "16px" }}
                            alt="Google"
                            width={74}
                            height={24}
                          />
                          <div
                            style={{
                              fontFamily:
                                '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
                              borderBottom: "thin solid #dadce0",
                              color: "rgba(0,0,0,0.87)",
                              lineHeight: "32px",
                              paddingBottom: "24px",
                              textAlign: "center",
                              wordBreak: "break-word",
                            }}
                          >
                            <div style={{ fontSize: "24px" }}>
                              Neues Gerät angemeldet
                            </div>
                            <table style={{ marginTop: "8px" }} align="center">
                              <tbody>
                                <tr style={{ lineHeight: "normal" }}>
                                  <td
                                    style={{ paddingRight: "8px" }}
                                    align="right"
                                  >
                                    <img
                                      style={{
                                        width: "20px",
                                        height: "20px",
                                        verticalAlign: "sub",
                                        borderRadius: "50%",
                                      }}
                                      src="https://lh5.googleusercontent.com/-CEHb2BWRteA/AAAAAAAAAAI/AAAAAAAABOU/gJDIBMAAXjE/s96/photo.jpg"
                                      alt=""
                                      width={20}
                                      height={20}
                                    />
                                  </td>
                                  <td>
                                    <a
                                      style={{
                                        fontFamily:
                                          '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
                                        color: "rgba(0,0,0,0.87)",
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                      }}
                                    >
                                      {this.props.emailAdress}
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div
                            style={{
                              fontFamily:
                                "Roboto-Regular,Helvetica,Arial,sans-serif",
                              fontSize: "14px",
                              color: "rgba(0,0,0,0.87)",
                              lineHeight: "20px",
                              paddingTop: "20px",
                              textAlign: "center",
                            }}
                          >
                            Jemand hat sich über ein neues Windows-Gerät in
                            Ihrem Google-Konto angemeldet. Sie haben diese
                            E-Mail erhalten, weil wir uns vergewissern möchten,
                            dass Sie das waren.
                            <div
                              style={{
                                paddingTop: "32px",
                                textAlign: "center",
                              }}
                            >
                              <a
                                href="https://accounts.google.com"
                                style={{
                                  fontFamily:
                                    '"Google Sans",Roboto,RobotoDraft,Helvetica,Arial,sans-serif',
                                  lineHeight: "16px",
                                  color: "#ffffff",
                                  fontWeight: 400,
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  display: "inline-block",
                                  padding: "10px 24px",
                                  backgroundColor: "#4184f3",
                                  borderRadius: "5px",
                                  minWidth: "90px",
                                }}
                                target="_blank"
                                data-saferedirecturl="https://www.google.com"
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
                                Aktivität prüfen
                              </a>
                            </div>
                          </div>
                        </div>
                        <div style={{ textAlign: "left" }}>
                          <div
                            style={{
                              fontFamily:
                                "Roboto-Regular,Helvetica,Arial,sans-serif",
                              color: "rgba(0,0,0,0.54)",
                              fontSize: "11px",
                              lineHeight: "18px",
                              paddingTop: "12px",
                              textAlign: "center",
                            }}
                          >
                            <div>
                              Wir haben Ihnen diese E-Mail gesendet, um Sie über
                              wichtige Änderungen zu Ihrem Google-Konto und den
                              Diensten von Google zu informieren.
                            </div>
                            <div style={{ direction: "ltr" }}>
                              © 2020 Google LLC,{" "}
                              <a
                                className="m_-488723823095496125afal"
                                style={{
                                  fontFamily:
                                    "Roboto-Regular,Helvetica,Arial,sans-serif",
                                  color: "rgba(0,0,0,0.54)",
                                  fontSize: "11px",
                                  lineHeight: "18px",
                                  paddingTop: "12px",
                                  textAlign: "center",
                                }}
                              >
                                1600 Amphitheatre Parkway, Mountain View, CA
                                94043, USA
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td style={{ width: "8px" }} width={8} />
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr style={{ height: "32px" }} height={32}>
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Mail29.defaultProps = {
  senderName: "Google",
  sender: "no-reply@accounts.google.com",
  date: "August 01, 2020, 08:21",
  subject: "Sicherheitswarnung",
  capital: "G",
  keyID: 29,
  avatarColor: "blue",
  unseen: true,
};

export default Mail29;
