import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllInbox from "./allInbox";
import SpamInbox from "./spamInbox";
import BinInbox from "./binInbox";
import ImportantInbox from "./importantInbox";

import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import ErrorIcon from "@material-ui/icons/Error";
import InboxIcon from "@material-ui/icons/Inbox";
import EmailIcon from "@material-ui/icons/Email";
import Inbox from "./emailsToImplement.js";
import Badge from "@material-ui/core/Badge";
import "./EmailClient.css";
import ProfileBox from "./ProfileBox";
class EmailClient extends Component {
  state = {
    currentInbox: "AllInbox",
    inbox: Inbox,
    mailNrBadge: 0,
    alerted: false,
    allInboxEmpty: false,
    mailTime: [],
    timeCount: 0
  };

  //Fisher Yates Array shuffle algorithm
  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  componentWillMount = () => {
    let copy = this.state;
    let usersInbox = [];

    copy.inbox.map((email) => {
      if (email.visible) usersInbox.push(email);
    });

    usersInbox.map((email) => {
      email["type"] = "AllInbox";
    });

    this.shuffleArray(usersInbox);
    copy.inbox = usersInbox;
    this.setState(copy);
    this.countEmails();
  };

  getAllInboxLength = () => {
    var counter2 = 0;
    this.state.inbox.forEach((element) => {
      if (element.type === "AllInbox") {
        counter2++;
      } else {
        return;
      }
    });
    if (counter2 === 0) {
      let copy = this.state;
      copy.allInboxEmpty = true;
      this.setState(copy);
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleIncomingEvent = (event) => {
    let copy = this.state;
    copy.events.push(event);
    this.setState(copy);
  };

  onMoveToSpam = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.mail.defaultProps.keyID === emailID) email.type = "SpamInbox";
    });
    this.props.clickedButton("SpamInboxButtonClicked", "InMoveToSpamButton");
    this.setState(copy);
    this.getAllInboxLength();
    this.forceUpdate();
  };

  onMoveToBin = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.mail.defaultProps.keyID === emailID) email.type = "BinInbox";
    });
    this.props.clickedButton("BinInboxButtonClicked", "InMoveToBinButton");
    this.setState(copy);
    this.getAllInboxLength();
    this.forceUpdate();
  };

  onMoveToImportant = (emailID) => {
    let copy = this.state;
    copy.inbox.map((email) => {
      if (email.mail.defaultProps.keyID === emailID)
        email.type = "ImportantInbox";
    });
    this.props.clickedButton(
      "ImportantInboxButtonClicked",
      "InMoveToImportantButton"
    );
    this.setState(copy);
    this.getAllInboxLength();
    this.forceUpdate();
  };

  countEmails = () => {
    let counter = 0;
    this.state.inbox.forEach((element) => {
      counter =
        element.mail.defaultProps.unseen === true ? counter + 1 : counter;
    });
    let copy = this.state;
    copy.mailNrBadge = counter;

    if (counter === 0 && this.state.alerted === false) {
      alert("You have viewed all Emails");
      copy.alerted = true;
    }

    this.setState(copy);
  };

  handleInboxChange = (whichInbox) => {
    let copy = this.state;
    copy.currentInbox = whichInbox;
    copy.currentEmail = undefined;
    this.setState(copy);
  };

  handleNewEmail = (emailNr) => {
    this.props.onNewEmail(emailNr);
    this.state.inbox.forEach((element) => {
      if (element.mail.defaultProps.keyID === emailNr) {
        let index = this.state.inbox.indexOf(element);
        let copy = this.state.inbox;
        copy[index].mail.defaultProps.unseen = false;
        this.setState({ inbox: copy });
      }
    });
    this.countEmails();
  };

  // this method will bind the time spent on each mail with the Inbox state
  updateInboxResult = () => {
    const updatedInbox = this.state.inbox.map(mailObject => {
      
      const mailTimeSpent = this.state.mailTime.find(mailt => 
        mailObject.mail.defaultProps.keyID === mailt.keyID
      )

      if(mailTimeSpent){
        return{
            ...mailObject,
            timeSpent: mailTimeSpent.timeSpent
        }
      }else{
        return {
          ...mailObject,
          timeSpent: 0
        }
      }
    })

    // Now send it back to where it was previously sending i.e: to store on server
    this.props.setInboxResult(updatedInbox)
  }

  // Count Time Spent
  countTime = (mail) => {
    const existingMailTime =  this.state.mailTime.find(stateMail => (
      stateMail.keyID === mail.keyID
    ))

    if(existingMailTime){
      // If an existing EMail is opened then continue from where previously left
      this.setState(state => {
        const mailTime = state.mailTime.map(stateMail => {
          
          if(stateMail.keyID === mail.keyID){
            return {
              ...stateMail,
              timeSpent: stateMail.timeSpent + 1
            }
          }else{
            return stateMail
          }

        });
   
        return {
          mailTime,
        };
      })

    }else{

      // If a new EMail is opened
      this.setState(state => ({
        mailTime: [
          ...state.mailTime,
          {
            keyID: mail.keyID,
            timeSpent: state.timeCount + 1
          }
        ]
      }))

    }
  }

  render() {
    const currentInbox = this.state.currentInbox;
    let inbox;

    if (currentInbox === "BinInbox") {
      inbox = (
        <BinInbox
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          onNewEmail={this.handleNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          inEmailText={this.props.inEmailText}
          outsideEmailInfo={this.props.outsideEmailInfo}
        ></BinInbox>
      );
    } else if (currentInbox === "AllInbox") {
      inbox = (
        <AllInbox
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          onNewEmail={this.handleNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          inEmailText={this.props.inEmailText}
          outsideEmailInfo={this.props.outsideEmailInfo}
          timeCount = {this.countTime}
        ></AllInbox>
      );
    } else if (currentInbox === "SpamInbox") {
      inbox = (
        <SpamInbox
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          onNewEmail={this.handleNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          inEmailText={this.props.inEmailText}
          outsideEmailInfo={this.props.outsideEmailInfo}
        ></SpamInbox>
      );
    } else if (currentInbox === "ImportantInbox") {
      inbox = (
        <ImportantInbox
          inEmailScrollAmount={this.props.inEmailScrollAmount}
          Mails={this.state.inbox}
          onMoveToSpam={this.onMoveToSpam}
          onMoveToBin={this.onMoveToBin}
          onMoveToImportant={this.onMoveToImportant}
          onNewEmail={this.handleNewEmail}
          Recipient={this.props.UserInfo.emailAdress}
          userName={this.props.UserInfo.userName}
          insideEmailInfo={this.props.insideEmailInfo}
          inEmailText={this.props.inEmailText}
          outsideEmailInfo={this.props.outsideEmailInfo}
        ></ImportantInbox>
      );
    }

    return (
      <div className="entireClient">
        <div className="HeaderInfo">
          <p>Welcome to your Email Client, {this.props.UserInfo.userName}</p>
          <ProfileBox
            className="ProfileBox"
            setInboxResult={() => this.updateInboxResult()}
            allInboxEmpty={this.state.allInboxEmpty}
          ></ProfileBox>
        </div>
        <nav className="nav-links">
          <ul>
            <Link
              to="/EmailClient/AllMails"
              onClick={() => {
                this.handleInboxChange("AllInbox");
                this.props.onNewInbox("AllInbox");
              }}
            >
              <li className="button-links">
                <Badge badgeContent={this.state.mailNrBadge} color="error">
                  <Button
                    style={{ width: "200px", height: "50px" }}
                    variant="outlined"
                    color={currentInbox === "AllInbox" ? "primary" : ""}
                    startIcon={<InboxIcon />}
                  >
                    All Mail
                  </Button>
                </Badge>
              </li>
            </Link>
            <Link
              to="/EmailClient/ImportantInbox"
              onClick={() => {
                this.handleInboxChange("ImportantInbox");
                this.props.onNewInbox("ImportantInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "200px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "ImportantInbox" ? "primary" : ""}
                  startIcon={<EmailIcon />}
                >
                  Inbox
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Spam"
              onClick={() => {
                this.handleInboxChange("SpamInbox");
                this.props.onNewInbox("SpamInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "200px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "SpamInbox" ? "primary" : ""}
                  startIcon={<ErrorIcon />}
                >
                  Spam
                </Button>
              </li>
            </Link>
            <Link
              to="/EmailClient/Bin"
              onClick={() => {
                this.handleInboxChange("BinInbox");
                this.props.onNewInbox("BinInbox");
              }}
            >
              <li className="button-links">
                <Button
                  style={{ width: "150px", height: "50px" }}
                  variant="outlined"
                  color={currentInbox === "BinInbox" ? "primary" : ""}
                  startIcon={<DeleteIcon />}
                >
                  Bin
                </Button>
              </li>
            </Link>
          </ul>
        </nav>
        {inbox}
      </div>
    );
  }
}

export default EmailClient;
