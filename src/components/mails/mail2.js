import React, { Component } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import "./MailsDefault.css";

class Mail2 extends Component {
  //first alert
  state = {};
  handleClick(e) {
    e.preventDefault();
    //this.props.insideEmailInfo(true, "ClickedLink1");
    console.log("The link was clicked.");
  }
  render() {
    return (
      <div>
        <h1
          style={{
            boxSizing: "border-box",
            margin: "20px 0px 10px",
            fontSize: "36px",
            lineHeight: "1.6",
            color: "rgb(68, 114, 196)",
          }}
        >
          <span class="marker">
            <samp>
              <font face="Helvetica Neue, Helvetica, Arial, sans-serif">
                <span style={{ fontWeight: "500" }}>Spotify&nbsp;</span>
              </font>
              <strong style={{ fontFamily: "Arial", fontWeight: "500" }}>
                &reg;
              </strong>
            </samp>
          </span>
        </h1>

        <p>Attention {this.props.userName}!</p>

        <p>
          Your Spotify has been disabled.
          <br />
          You&#39;ve place you&nbsp;account under the risk of termination by not
          keeping the correct informations .&nbsp; &nbsp;
        </p>

        <p>Please verify your account as soon as possible.</p>

        <p>
          Ready to check ? Click{" "}
          <a
            href="http://www.spotifyverificationinfoaccount.club"
            target="_blank"
            onClick={() => {
              this.props.insideEmailInfo(true, "ClickedLink1");
              console.log("halloooo");
            }}
          >
            <Tooltip
              title="This link is blocked as it might be phishing"
              disableFocusListener
              disableTouchListener
            >
              <Button
                onMouseEnter={() => {
                  this.props.insideEmailInfo(true, "InLink1");
                }}
                onMouseLeave={() => {
                  this.props.insideEmailInfo(false, "InLink1");
                }}
                onMouseOver={() => {
                  this.props.insideEmailInfo(true, "InLink1");
                }}
                onClick={this.handleClick}
              >
                here
              </Button>
            </Tooltip>
          </a>{" "}
          to get back your account.
        </p>

        <p>Inc.Spotify</p>

        <p></p>
      </div>
    );
  }
}

Mail2.defaultProps = {
  sender: "infos@spotify.com",
  date: "November 13, 2019, 07:47",
  subject: "Your Spotify Account Verification",
  capital: "S",
  keyID: 2,
  unseen: true,
};

export default Mail2;
