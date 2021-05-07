import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class SpamInbox extends Component {
  state = { spamInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ spamInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "SpamInbox") {
        inbox.push(email);
      }
    });

    this.setState({ spamInbox: inbox });
  };
  render() {
    return (
      <div style={{}}>
        <Sidebar
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.spamInbox}
          inboxType="SpamInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          onMoveToImportant={this.props.onMoveToImportant}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.Recipient}
          userName={this.props.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          outsideEmailInfo={this.props.outsideEmailInfo}
          inEmailText={this.props.inEmailText}
        />
      </div>
    );
  }
}

export default SpamInbox;
