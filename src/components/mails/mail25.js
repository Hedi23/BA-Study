import React, { Component } from "react";
import "./MailsDefault.css";

class Mail25 extends Component {
  state = {};
  render() {
    return (
      <div>
        <table
          id="m_4504949099871128400message-body-wrapper"
          cellSpacing={0}
          cellPadding={0}
          border={0}
        >
          <tbody>
            <tr>
              <td
                id="m_4504949099871128400message-body-left-margin"
                width={0}
              />{" "}
              <td id="m_4504949099871128400message-body">
                <table
                  id="m_4504949099871128400paragraphs"
                  cellSpacing={0}
                  cellPadding={0}
                  border={0}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "0 5% 18px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                          color: "#333",
                        }}
                      >
                        Dear {this.props.userName},
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0 5% 18px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                          color: "#333",
                        }}
                      >
                        {" "}
                        The password for your Apple ID (
                        <em>
                          <a>{this.props.emailAdress}</a>
                        </em>
                        ) has been successfully reset.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0 5% 18px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                          color: "#333",
                        }}
                      >
                        If you did not make this change or you believe an
                        unauthorised person has accessed your account, go to{" "}
                        <a
                          href="https://iforgot.apple.com"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?hl=de&q=https://iforgot.apple.com&source=gmail&ust=1597139756777000&usg=AFQjCNGXifqn6KbcnsmY5G6jSfhkvtz9_A"
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
                          iforgot.apple.com
                        </a>{" "}
                        to reset your password without delay. Following this,
                        sign into your Apple ID account page at{" "}
                        <a
                          href="https://appleid.apple.com"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?hl=de&q=https://appleid.apple.com&source=gmail&ust=1597139756777000&usg=AFQjCNHdfw4LvurwQzdIDbySj_nWpHCx6g"
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
                          https://appleid.apple.com
                        </a>{" "}
                        to review and update your security settings.
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0 5% 18px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                          color: "#333",
                        }}
                      >
                        If you need additional help, please contact{" "}
                        <a
                          href="https://support.apple.com/en-gb"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?hl=de&q=https://support.apple.com/en-gb&source=gmail&ust=1597139756777000&usg=AFQjCNHgjUUzuagDij9PpFuHPW4T_v8Qpg"
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
                          Apple Support
                        </a>
                        .
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "0 5% 18px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                          color: "#333",
                        }}
                      >
                        Sincerely,
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="m_4504949099871128400signature"
                        style={{
                          padding: "18px 5% 51px",
                          font:
                            '300 14px/18px "Lucida Grande",Lucida Sans,Lucida Sans Unicode,sans-serif,Arial,Helvetica,Verdana,sans-serif',
                        }}
                      >
                        Apple Support
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Mail25.defaultProps = {
  senderName: "appleid@id.apple.com",
  sender: "Apple",
  date: "April 09, 2020, 11:18",
  subject: "Your Apple ID password has been reset",
  capital: "A",
  keyID: 25,
  avatarColor: "grey",
  unseen: true,
};

export default Mail25;
