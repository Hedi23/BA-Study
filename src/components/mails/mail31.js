import React, { Component } from "react";
import "./MailsDefault.css";

class Mail31 extends Component {
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
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        We recently received a request to recover your Microsoft
                        account{" "}
                        <a
                          href={`mailto:${this.props.emailAdress}`}
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
                          {this.props.emailAdress}
                        </a>
                        . Unfortunately, our automated system has determined
                        that the information you provided was not sufficient for
                        us to validate your account ownership.&nbsp;{" "}
                        <span style={{ color: "#000000" }}>
                          Microsoft takes the security and privacy of our
                          customers very seriously, and our commitment to
                          protecting your personal information requires that we
                          take the utmost care in ensuring that you are the
                          account owner.
                        </span>
                      </span>
                    </p>
                    <p>
                      <b>
                        <span
                          style={{
                            fontSize: "11pt",
                            fontFamily: "arial,sans-serif",
                            color: "#000000",
                          }}
                        >
                          Please submit a new account verification form
                        </span>
                      </b>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        At this point, your best option is to{" "}
                        <b>
                          <a
                            href="https://account.live.com/acsr"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/acsr&source=gmail&ust=1597143654363000&usg=AFQjCNHW1WsSJgZ-kQLg756fEGaahCcmpw"
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
                            <span style={{ color: "#0000ff" }}>
                              submit a new form
                            </span>
                          </a>
                        </b>{" "}
                        with{" "}
                        <span style={{ color: "#000000" }}>
                          as much accurate
                        </span>{" "}
                        information as you can gather. The more information you
                        can include in the form, the better the chance you’ll
                        have of regaining access to your account. We’ve included
                        a few tips below to help you fill out the form as{" "}
                        <span style={{ color: "#000000" }}>
                          completely and accurately as
                        </span>{" "}
                        possible.
                      </span>
                      &nbsp;
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                          color: "#000000",
                        }}
                      >
                        &gt;{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                          color: "#4f81bd",
                        }}
                      >
                        <a
                          href="https://account.live.com/acsr"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/acsr&source=gmail&ust=1597143654363000&usg=AFQjCNHW1WsSJgZ-kQLg756fEGaahCcmpw"
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
                          <span style={{ color: "#4f81bd" }}>
                            Submit a new form
                          </span>
                        </a>
                      </span>
                    </p>
                    <p>
                      <b>
                        <span
                          style={{
                            fontSize: "11pt",
                            fontFamily: "arial,sans-serif",
                            color: "#000000",
                          }}
                        >
                          Helpful tips for filling out another form:
                        </span>
                      </b>
                    </p>
                    <ul>
                      <li>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                          }}
                        >
                          Answer <b>as many questions</b> as you can.
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                          }}
                        >
                          Use the information you provided when you{" "}
                          <b>created the account, </b>or last updated it.
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                          }}
                        >
                          Submit the form from a computer you{" "}
                          <b>frequently use</b>.
                        </span>{" "}
                      </li>
                      <li>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                            color: "#000000",
                          }}
                        >
                          You will be asked to list{" "}
                          <b>
                            recently used email addresses and the subject lines
                            from recent emails
                          </b>
                          . Ask for help from family members, friends, or
                          business contacts to confirm their email addresses and
                          tell you the subject lines of the last three emails
                          they
                        </span>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                          }}
                        >
                          {" "}
                          sent you.
                        </span>{" "}
                      </li>
                      <li style={{ color: "black" }}>
                        <span
                          style={{
                            fontSize: "10pt",
                            fontFamily: "arial,sans-serif",
                            color: "#000000",
                          }}
                        >
                          Make sure to use the{" "}
                          <b>correct domain for your account</b>, such as{" "}
                          <a
                            href="http://hotmail.com"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=http://hotmail.com&source=gmail&ust=1597143654363000&usg=AFQjCNFzYLDfVAb0cuhEWAdKeSsQ2SN-Yw"
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
                            hotmail.com
                          </a>
                          ,{" "}
                          <a
                            href="http://live.com"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=http://live.com&source=gmail&ust=1597143654363000&usg=AFQjCNFSBdmhc0wqPlzI_pnfmZyN-WHYUA"
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
                            live.com
                          </a>
                          , or{" "}
                          <a
                            href="http://outlook.com"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=http://outlook.com&source=gmail&ust=1597143654363000&usg=AFQjCNHt9VoqMJzoH8q6f2jUCniMXQ7x5Q"
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
                            outlook.com
                          </a>
                          . Keep in mind that your email address may be country
                          specific. For example, if you created your account in
                          Sweden, your domain would be “
                          <a
                            href="http://hotmail.co.se"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=http://hotmail.co.se&source=gmail&ust=1597143654363000&usg=AFQjCNExJg2ceBhhYt96KFCUoGnzyeoj-w"
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
                            hotmail.co.se
                          </a>
                          ” rather than “
                          <a
                            href="http://hotmail.com"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=http://hotmail.com&source=gmail&ust=1597143654363000&usg=AFQjCNFzYLDfVAb0cuhEWAdKeSsQ2SN-Yw"
                            onMouseEnter={() => {
                              this.props.insideEmailInfo(true, "InLink8");
                            }}
                            onMouseLeave={() => {
                              this.props.insideEmailInfo(false, "InLink8");
                            }}
                            onMouseOver={() => {
                              this.props.insideEmailInfo(true, "InLink8");
                            }}
                            onClick={() => {
                              this.props.insideEmailInfo(true, "ClickedLink8");
                            }}
                          >
                            hotmail.com
                          </a>
                          ”.
                        </span>{" "}
                      </li>
                    </ul>
                    <p>
                      <b />
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Ready?
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        &gt;
                        <span style={{ color: "#4f81bd" }}>
                          {" "}
                          <a
                            href="https://account.live.com/acsr"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?hl=de&q=https://account.live.com/acsr&source=gmail&ust=1597143654363000&usg=AFQjCNHW1WsSJgZ-kQLg756fEGaahCcmpw"
                            onMouseEnter={() => {
                              this.props.insideEmailInfo(true, "InLink9");
                            }}
                            onMouseLeave={() => {
                              this.props.insideEmailInfo(false, "InLink9");
                            }}
                            onMouseOver={() => {
                              this.props.insideEmailInfo(true, "InLink9");
                            }}
                            onClick={() => {
                              this.props.insideEmailInfo(true, "ClickedLink9");
                            }}
                          >
                            <span style={{ color: "#4f81bd" }}>
                              Submit a new form
                            </span>
                          </a>
                        </span>
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Thank you,
                        <br />
                      </span>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Microsoft Support Team
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "10pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Microsoft Corporation
                        <br />
                        One Microsoft Way
                        <br />
                        Redmond, WA 98052
                        <br />
                        USA
                      </span>
                    </p>
                    <p>
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Account recovery request 286369966 is now closed. Please
                        do not reply to this message. Replies to this message
                        are routed to an unmonitored mailbox.&nbsp;{" "}
                      </span>
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        Microsoft respects your privacy.&nbsp; To learn more,
                        please read our
                      </span>{" "}
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "arial,sans-serif",
                          color: "#0070c0",
                          textDecoration: "underline",
                        }}
                      >
                        <a
                          href="http://privacy.microsoft.com/"
                          target="_blank"
                          data-saferedirecturl="https://www.google.com/url?hl=de&q=http://privacy.microsoft.com/&source=gmail&ust=1597143654363000&usg=AFQjCNFpOQ1i5PswexWwLgfevRXDfPad1g"
                          onMouseEnter={() => {
                            this.props.insideEmailInfo(true, "InLink10");
                          }}
                          onMouseLeave={() => {
                            this.props.insideEmailInfo(false, "InLink10");
                          }}
                          onMouseOver={() => {
                            this.props.insideEmailInfo(true, "InLink10");
                          }}
                          onClick={() => {
                            this.props.insideEmailInfo(true, "ClickedLink10");
                          }}
                        >
                          <span style={{ color: "#0000ff" }}>
                            Privacy Statement
                          </span>
                        </a>
                      </span>
                      <span
                        style={{
                          fontSize: "9pt",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        .
                      </span>
                    </p>
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

Mail31.defaultProps = {
  senderName: "Microsoft Account - Unmonitored Automated Email",
  sender: "unmonitored@microsoft.com",
  date: "July 23, 2020, 01:35",
  subject: `Your account recovery request`,
  capital: "M",
  keyID: 31,
  avatarColor: "blue",
  unseen: true,
};

export default Mail31;
