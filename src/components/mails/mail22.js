import React, { Component } from "react";
import "./MailsDefault.css";

class Mail22 extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <div>
          &nbsp;
          <span
            style={{
              color: "#ffffff",
              display: "none!important",
              fontSize: "1px",
            }}
          >
            &nbsp; Hallo {this.props.userName}, Anscheinend ist bei der
            Anmeldung bei Facebook ein Problem aufgetreten. Klicke unten auf den
            Button, um dich anzumelden. &nbsp; Zurück&nbsp;zu&nbsp;Facebook
            &nbsp; Falls du dich nicht anmelden wolltest, teile uns das mit .
            &nbsp;
          </span>
          &nbsp;&nbsp;&nbsp;
          <table
            style={{ borderCollapse: "collapse" }}
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            border={0}
          >
            <tbody>
              <tr>
                <td style={{ lineHeight: "16px" }} colSpan={3} height={16}>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  style={{ height: 32, lineHeight: "0px" }}
                  width={32}
                  valign="middle"
                  align="left"
                >
                  <img
                    src="https://ci4.googleusercontent.com/proxy/6ucuLaja9G31fOtvdCsU4E454cbI99zHqdVlMgn01dFJAdjsoXGTNqNxA0uplSWXQlsIGHiwAe5tVhyLZY5ZlTL8kzJUay2pP-u7Ihlycw=s0-d-e1-ft#https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/_2faPUZhPI6.png"
                    style={{ border: 0 }}
                    width={32}
                    height={32}
                  />
                </td>
                <td style={{ display: "block", width: "15px" }} width={15}>
                  &nbsp;&nbsp;&nbsp;
                </td>
                <td width="100%">
                  <span
                    style={{
                      fontFamily:
                        "Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif",
                      fontSize: "19px",
                      lineHeight: "32px",
                      color: "#3b5998",
                    }}
                  >
                    Facebook
                  </span>
                </td>
              </tr>
              <tr style={{ borderBottom: "solid 1px #e5e5e5" }}>
                <td style={{ lineHeight: "16px" }} colSpan={3} height={16}>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <table
            style={{ borderCollapse: "collapse" }}
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            border={0}
          >
            <tbody>
              <tr>
                <td style={{ lineHeight: "28px" }} height={28}>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    className="m_-1378442999228814486mb_text"
                    style={{
                      fontFamily:
                        "Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif",
                      fontSize: "16px",
                      lineHeight: "21px",
                      color: "#141823",
                    }}
                  >
                    <p />
                    <p>Hallo {this.props.userName},</p>
                    <p>
                      Anscheinend ist bei der Anmeldung bei Facebook ein Problem
                      aufgetreten. Klicke unten auf den Button, um dich
                      anzumelden.
                    </p>
                    <table
                      style={{ borderCollapse: "collapse" }}
                      width="100%"
                      cellSpacing={0}
                      cellPadding={0}
                      border={0}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{ lineHeight: "2px" }}
                            colSpan={3}
                            height={2}
                          >
                            &nbsp;
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <a
                              href="https://www.facebook.com/recover/code?u=100000215355979&n=442051&exp_locale=de_DE&s=24&ocl=1"
                              style={{
                                color: "#3b5998",
                                textDecoration: "none",
                              }}
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.facebook.com/recover/code?u%3D100000215355979%26n%3D442051%26exp_locale%3Dde_DE%26s%3D24%26ocl%3D1&source=gmail&ust=1596715579127000&usg=AFQjCNGJacYT6-ATKmNLKdPVKfNbu1k-Ww"
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
                              <table
                                style={{ borderCollapse: "collapse" }}
                                width="100%"
                                cellSpacing={0}
                                cellPadding={0}
                                border={0}
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      style={{
                                        borderCollapse: "collapse",
                                        borderRadius: "2px",
                                        textAlign: "center",
                                        display: "block",
                                        border: "solid 1px #344c80",
                                        background: "#4c649b",
                                        padding: "7px 16px 11px 16px",
                                      }}
                                    >
                                      <a
                                        href="https://www.facebook.com/recover/code?u=100000215355979&n=442051&exp_locale=de_DE&s=24&ocl=1"
                                        style={{
                                          color: "#3b5998",
                                          textDecoration: "none",
                                          display: "block",
                                        }}
                                        target="_blank"
                                        data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.facebook.com/recover/code?u%3D100000215355979%26n%3D442051%26exp_locale%3Dde_DE%26s%3D24%26ocl%3D1&source=gmail&ust=1596715579127000&usg=AFQjCNGJacYT6-ATKmNLKdPVKfNbu1k-Ww"
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
                                        <center>
                                          <font size={3}>
                                            <span
                                              style={{
                                                fontFamily:
                                                  "Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif",
                                                whiteSpace: "nowrap",
                                                fontWeight: "bold",
                                                verticalAlign: "middle",
                                                color: "#ffffff",
                                                fontSize: "14px",
                                                lineHeight: "14px",
                                              }}
                                            >
                                              Zurück&nbsp;zu&nbsp;Facebook
                                            </span>
                                          </font>
                                        </center>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </a>
                          </td>
                          <td width="100%" />
                        </tr>
                        <tr>
                          <td
                            style={{ lineHeight: "32px" }}
                            colSpan={3}
                            height={32}
                          >
                            &nbsp;
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p />
                    <p>
                      Falls du dich nicht anmelden wolltest,{" "}
                      <a
                        href="https://www.facebook.com/login/recover/disavow_reset_email.php?n=442051&i=www&id=100000215355979&ocl=1"
                        style={{ color: "#3b5998", textDecoration: "none" }}
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?hl=de&q=https://www.facebook.com/login/recover/disavow_reset_email.php?n%3D442051%26i%3Dwww%26id%3D100000215355979%26ocl%3D1&source=gmail&ust=1596715579127000&usg=AFQjCNHIe5nIvOGnF242zrgmaHcAzxA87A"
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
                        teile uns das mit
                      </a>
                      .
                    </p>
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ lineHeight: "14px" }} height={14}>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <table
            style={{ borderCollapse: "collapse" }}
            width="100%"
            cellSpacing={0}
            cellPadding={0}
            border={0}
          >
            <tbody>
              <tr style={{ borderTop: "solid 1px #e5e5e5" }}>
                <td style={{ lineHeight: "16px" }} height={16}>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    fontFamily:
                      "Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif",
                    fontSize: "11px",
                    color: "#aaaaaa",
                    lineHeight: "16px",
                  }}
                >
                  Diese Nachricht wurde an{" "}
                  <a
                    href={`mailto:${this.props.emailAdress}`}
                    style={{ color: "#3b5998", textDecoration: "none" }}
                    target="_blank"
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
                    {this.props.emailAdress}
                  </a>{" "}
                  gesendet.
                  <br />
                  Facebook, Inc., Attention: Community Support, 1 Hacker Way,
                  Menlo Park, CA 94025
                </td>
              </tr>
            </tbody>
          </table>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    );
  }
}

Mail22.defaultProps = {
  senderName: "Facebook",
  sender: "security@facebookmail.com",
  date: "July 19, 2020, 20:39",
  subject: "Hallo, kehre mit nur einem Klick zu Facebook zurück",
  capital: "FB",
  keyID: 22,
  avatarColor: "blue",
  unseen: true,
};

export default Mail22;
