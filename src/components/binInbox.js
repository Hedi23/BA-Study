import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class BinInbox extends Component {
  state = { binInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "BinInbox") {
        inbox.push(email);
      }
    });

    this.setState({ binInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "BinInbox") {
        inbox.push(email);
      }
    });

    this.setState({ binInbox: inbox });
  };

  render() {
    return (
      <div style={{}}>
        <Sidebar
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.binInbox}
          InboxType="BinInbox"
          onMoveToSpam={this.props.onMoveToSpam}
          onMoveToBin={this.props.onMoveToBin}
          onMoveToImportant={this.props.onMoveToImportant}
          Response={this.props.Response}
          onNewEmail={this.props.onNewEmail}
          Recipient={this.props.Recipient}
          userName={this.props.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          inEmailText={this.props.inEmailText}
          outsideEmailInfo={this.props.outsideEmailInfo}
        />
      </div>
    );
  }
}

export default BinInbox;
