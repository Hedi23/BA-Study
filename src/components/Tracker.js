import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EmailClient from "./emailClient";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      currentEmail: 0, //event dependant
      currentInbox: "AllInbox",
      insideEmailInfo: [],
      outsideEmailInfo: [], //event dependant
      mousePosXPlain: 0,
      mousePosYPlain: 0,
      mousePosXTransform: 0,
      mousePosYTransform: 0,
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
      timeStamp: 0,
      gazeX: 0,
      gazeY: 0,
      gazeXTransform: 0,
      gazeYTransform: 0,
      validationGaze: 0, // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated!
      userId: 0,
      userNickname: "",
      pageScrollY: 0,
      browserWidth: 0,
      browserHeight: 0,
      marginToScreenTop: 0,
      marginToScreenLeft: 0,
      inEmailScrollAmount: 0,
      inEmailPositionY: 0,

      submitted: false,
    };

    this.resultInbox = { resultInbox: [], userID: 0 };
    this.stateCollector = [];
    this.collectionInterval = undefined;
    this.sendingInterval = undefined;
    this.accuracyCollector = [];
    this.accuracyIntervall = undefined;
    this.collectingAccuracy = false;
  }

  componentDidMount() {
    this.getUserID();
    this.getNickname();
    this.props.userID(this.state.userId);
  }

  getUserID = () => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/connect", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ userId: data.userID }))
      .then(() => this.props.userID(this.state.userId));
  };

  getNickname = () => {
    //set nickname from props
    let nickname = this.props.userInfo.userName;
    this.setState({ userNickname: nickname });
  };

  startCalibration = () => {
    window.GazeCloudAPI.APIKey = "GazeBehavior_NonCommercialUse";
    window.GazeCloudAPI.StartEyeTracking();
    window.GazeCloudAPI.OnCalibrationComplete = () => {
      console.log("gaze Calibration Complete");
      this.startTracking();
    };
  };

  startTracking = () => {
    this.collectionInterval = setInterval(this.collectStates, 250);
    this.sendingIntervall = setInterval(this.sendData, 5000);
  };

  sendData = () => {
    //Send to Server
    const data = this.stateCollector;
    const response = fetch("/data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(this.resetCollector);
  };

  sendAccurcyInfo = () => {
    //Send to Server
    const data = this.accuracyCollector;
    const response = fetch("/accuracyInfo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sent accuracy info"));
  };

  collectStates = () => {
    this.setAllInfo();
    this.fillCollector();
    this.resetStates();
  };

  setAllInfo = () => {
    this.settingsChecker();
    this.setGazeData();
    this.setTimestamp();
  };

  setGazeData = () => {
    window.GazeCloudAPI.OnResult = function (GazeData) {
      window.gazeDataX = GazeData.docX;
      window.gazeDataY = GazeData.docY;
      window.validation = GazeData.state; // 0: valid gaze, 1 : face tracking lost, 1 : gaze data uncalibrated!
    };

    this.setState({
      gazeX: window.gazeDataX,
      gazeY: window.gazeDataY,
      validationGaze: window.validation,
    });

    this.setTransformedGazePos(this.state.gazeX, this.state.gazeY);
  };

  setTimestamp = () => {
    let currentTime = new Date();
    let newDate = currentTime.getTime();
    this.setState({ timeStamp: newDate });
  };

  fillCollector = () => {
    this.stateCollector.push(this.state);
  };

  resetCollector = () => {
    this.stateCollector = [];
  };

  resetStates = () => {
    this.setState({
      click: false,
      clickPosXTransform: 0,
      clickPosYTransform: 0,
      clickPosX: 0,
      clickPosY: 0,
    });
  };

  handleMouseMove(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.setState({ mousePosXPlain: x, mousePosYPlain: y });
  }

  settingsChecker = () => {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    let height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    let marginTop = window.screenTop;
    let marginLeft = window.screenLeft;

    let yScroll = Math.round(window.scrollY);

    this.setState({
      browserWidth: width,
      browserHeight: height,
      marginToScreenLeft: marginLeft,
      marginToScreenTop: marginTop,
      pageScrollY: yScroll,
    });

    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );

    this.setinEmailPositionY();
  };

  setinEmailPositionY = () => {
    let inEmailPositionY =
      this.state.mousePosYPlain + this.state.inEmailScrollAmount;
    this.setState({ inEmailPositionY: inEmailPositionY });
  };

  SetInEmailScrollAmount = (scrollAmount) => {
    let roundScrollAmount = Math.round(scrollAmount);
    this.setState({ inEmailScrollAmount: roundScrollAmount });
  };

  setTransformedMousePos = (x, y) => {
    let clientWidth = 980;
    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xTran = (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yTran = y + this.state.pageScrollY;
    } else {
      var xTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yTran = y + this.state.pageScrollY;
    }
    this.setState({ mousePosXTransform: xTran, mousePosYTransform: yTran });
  };

  setTransformedGazePos = (x, y) => {
    let clientWidth = 980;

    if (x > this.state.browserWidth / 2 + clientWidth / 2) {
      var xGazeTran =
        (x - (this.state.browserWidth / 2 + clientWidth / 2)) * -1;
      var yGazeTran = y + this.state.pageScrollY;
    } else {
      var xGazeTran = (this.state.browserWidth / 2 - clientWidth / 2 - x) * -1;
      var yGazeTran = y + this.state.pageScrollY;
    }
    this.setState({ gazeXTransform: xGazeTran, gazeYTransform: yGazeTran });
  };

  handleMouseClick(event) {
    let copy = this.state;
    this.handleMouseMove(event);
    this.setTransformedMousePos(
      this.state.mousePosXPlain,
      this.state.mousePosYPlain
    );
    copy.click = true;
    copy.clickPosX = this.state.mousePosXPlain;
    copy.clickPosY = this.state.mousePosYPlain;
    this.setState(copy);
  }

  handleNewCurrentEmail = (emailNr) => {
    let copy = this.state;
    copy.currentEmail = emailNr;
    this.setState(copy);
  };

  handleNewCurrentInbox = (inboxType) => {
    let copy = this.state;
    copy.currentInbox = inboxType;
    copy.currentEmail = 0;
    this.setState(copy);
  };

  handleInboxResult = (finalInboxLocal) => {
    this.resultInbox.resultInbox = finalInboxLocal;
    this.resultInbox.resultInbox.forEach((element) => {
      element.keyID = element.mail.defaultProps.keyID;
      element.unseen = element.mail.defaultProps.unseen;
    });
    this.resultInbox.userID = this.state.userId;
    this.sendFinalInbox();
    this.startAccuracyTest();
    clearInterval(this.collectionInterval);
    clearInterval(this.sendingIntervall);
  };

  sendFinalInbox = () => {
    //Send to Server

    const data = this.resultInbox;
    const response = fetch("/resultInbox", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sent result Inbox"));
  };

  startAccuracyTest = () => {
    let copy = this.state;
    copy.submitted = true;
    this.setState(copy);
  };

  collectAccuracyData = (circlePos, width, height) => {
    if (this.collectingAccuracy === false) {
      this.accuracyIntervall = setInterval(
        this.fillAccuracyCollector,
        100,
        circlePos,
        width,
        height
      );
      this.collectingAccuracy = true;
    } else {
      clearInterval(this.accuracyIntervall);
      this.collectingAccuracy = false;
      this.collectAccuracyData(circlePos, width, height);
    }
  };

  fillAccuracyCollector = (circlePos, width, height) => {
    this.setGazeData();
    let accuracyData = [
      this.state.userId,
      circlePos,
      this.state.gazeX,
      this.state.gazeY,
      this.state.validationGaze,
      width,
      height,
    ];
    this.accuracyCollector.push(accuracyData);
  };

  stopAccuracyTest = () => {
    this.sendAccurcyInfo();
    window.GazeCloudAPI.StopEyeTracking();
    clearInterval(this.accuracyIntervall);
  };

  handleInsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      if (whichPart.includes("ClickedLink")) {
        copy.insideEmailInfo.push(whichPart);
        const timerForClickedLink = setTimeout(() => {
          this.deletefromInsideEmailInfo(whichPart);
        }, 1000);
        this.setState(copy);
        this.sendData();
        return;
      }
      if (!copy.insideEmailInfo.includes(whichPart)) {
        copy.insideEmailInfo.push(whichPart);
      } else {
      }
      this.setState(copy);
    } else {
      this.deletefromInsideEmailInfo(whichPart);
    }
  };

  handleOutsideEmailInfo = (InOrOutput, whichPart) => {
    if (InOrOutput === true) {
      let copy = this.state;
      copy.outsideEmailInfo.push(whichPart);
      this.setState(copy);
    } else {
      this.deletefromOutsideEmailInfo(whichPart);
    }
  };

  deletefromInsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.insideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.insideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  deletefromOutsideEmailInfo = (whichToDelete) => {
    let copy = this.state;
    const index = copy.outsideEmailInfo.indexOf(whichToDelete);
    if (index > -1) {
      copy.outsideEmailInfo.splice(index, 1);
    }
    this.setState(copy);
  };

  handleClickedInboxButton = (whichButton, insideWhichButton) => {
    let copy = this.state;
    copy.insideEmailInfo.push(whichButton);
    this.setState(copy);

    const timer2 = setTimeout(() => {
      this.deletefromInsideEmailInfo(whichButton);
    }, 1050);
  };

  render() {
    return (
      <div>
        {this.state.submitted === false ? (
          <div
            onMouseMove={this.handleMouseMove}
            onClick={this.handleMouseClick}
          >
            <EmailClient
              clickedButton={this.handleClickedInboxButton}
              inEmailScrollAmount={this.SetInEmailScrollAmount}
              UserInfo={this.props.userInfo}
              onNewEmail={this.handleNewCurrentEmail}
              onNewInbox={this.handleNewCurrentInbox}
              setInboxResult={this.handleInboxResult}
              insideEmailInfo={this.handleInsideEmailInfo}
              outsideEmailInfo={this.handleOutsideEmailInfo}
            ></EmailClient>
          </div>
        ) : (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link
              to="/SurveyComponent"
              activeClassName="active"
              style={{ width: "380px" }}
            >
              <Button
                variant="contained"
                style={{ backgroundColor: "#04B45F", margin: "10px" }}
                onClick={this.props.sendAccuracyData}
              >
                <ExitToAppIcon></ExitToAppIcon>Go To Survey
              </Button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default Tracker;
