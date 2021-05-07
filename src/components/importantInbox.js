import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class importantInbox extends Component {
  state = { importantInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "ImportantInbox") {
        inbox.push(email);
      }
    });

    this.setState({ importantInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "ImportantInbox") {
        inbox.push(email);
      }
    });

    this.setState({ importantInbox: inbox });
  };

  render() {
    return (
      <div style={{}}>
        <Sidebar
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.importantInbox}
          InboxType="ImportantInbox"
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

export default importantInbox;
