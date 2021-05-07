import React, { Component } from "react";
import Sidebar from "./sidebar.js";

class AllInbox extends Component {
  state = { allInbox: [] };

  componentDidMount = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "AllInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
  };

  componentWillReceiveProps = () => {
    let inbox = [];
    this.props.Mails.map((email) => {
      if (email.type === "AllInbox") {
        inbox.push(email);
      }
    });

    this.setState({ allInbox: inbox });
  };

  render() {
    return (
      <div>
        <Sidebar
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.allInbox}
          InboxType="AllInbox"
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
          timeCount = {this.props.timeCount}
          parentName = "AllInbox"
        />
      </div>
    );
  }
}

export default AllInbox;
