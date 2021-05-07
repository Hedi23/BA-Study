import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./HeaderInfoEmail.css";

class HeaderInfoEmail extends Component {
  state = {};

  log(whichP) {
    console.log(whichP);
  }

  render() {
    return (
      <div className="AllHeaders">
        <div className="Wrapper">
          <Avatar
            style={{
              backgroundColor: `${this.props.Email.mail.defaultProps.avatarColor}`,
              top: "25px",
              marginLeft: "10px",
            }}
          >
            {this.props.Email.mail.defaultProps.capital}
          </Avatar>
        </div>
        <div>
          <p
            className="HeaderText"
            onMouseEnter={() => {
              this.props.insideEmailInfo(true, "InFrom");
            }}
            onMouseLeave={() => {
              this.props.insideEmailInfo(false, "InFrom");
            }}
          >
            <strong className="HeadingInfo">From: </strong>{" "}
            {this.props.Email.mail.defaultProps.sender}{" "}
          </p>
          <p
            className="HeaderText"
            onMouseEnter={() => {
              this.props.insideEmailInfo(true, "InTo");
            }}
            onMouseLeave={() => {
              this.props.insideEmailInfo(false, "InTo");
            }}
          >
            {" "}
            <strong className="HeadingInfo">To: </strong>
            {this.props.emailAdress}{" "}
          </p>
          <p
            className="HeaderText"
            onMouseEnter={() => {
              this.props.insideEmailInfo(true, "InDate");
            }}
            onMouseLeave={() => {
              this.props.insideEmailInfo(false, "InDate");
            }}
          >
            {" "}
            <strong className="HeadingInfo">Date: </strong>
            {this.props.Email.mail.defaultProps.date}
          </p>
          <p
            className="HeaderText"
            onMouseEnter={() => {
              this.props.insideEmailInfo(true, "InSubject");
            }}
            onMouseLeave={() => {
              this.props.insideEmailInfo(false, "InSubject");
            }}
          >
            {" "}
            <strong className="HeadingInfo">Subject: </strong>{" "}
            {this.props.Email.mail.defaultProps.subject}
          </p>
        </div>
        <hr />
      </div>
    );
  }
}

export default HeaderInfoEmail;
