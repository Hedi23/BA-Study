import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import "./Survey.css";

class SurveyComponent extends Component {
  state = {
    userID: 0,
  };

  //Define Survey JSON
  json = {
    showQuestionNumbers: "off",
    elements: [
      {
        type: "radiogroup",
        name: "gender",
        title: "Please select your gender",
        isRequired: true,
        colCount: 4,
        choices: ["male", "female", "other", "prefer not to say"],
      },
      {
        type: "text",
        name: "age",
        title: "What is your age?",
        isRequired: true,
      },
      {
        type: "text",
        name: "background",
        title: "What is your background? (eg. Computer Science)",
        isRequired: true,
      },
      {
        type: "dropdown",
        name: "Alert",
        title:
          "Which phishing alert helped you the most with recognizing the phishing emails",
        isRequired: true,
        colCount: 0,
        choices: [
          "Link with the red background",
          "Blocked Link with the tooltip",
          "Grey Overlay",
        ],
      },
      {
        type: "matrix",
        name: "User Experience",
        isRequired: true,
        title:
          "Please indicate if you agree or disagree with the following statements.",
        columns: [
          {
            value: 1,
            text: "Strongly Disagree",
          },
          {
            value: 2,
            text: "Disagree",
          },
          {
            value: 3,
            text: "Neutral",
          },
          {
            value: 4,
            text: "Agree",
          },
          {
            value: 5,
            text: "Strongly Agree",
          },
        ],
        rows: [
          {
            value: "Experience IT Security",
            text: "I have experience with IT Security. ",
          },
          {
            value: "Information presented enough",
            text:
              "I used information provided in the interface to categorize the emails. (e.g. email subject)",
          },
          {
            value: "Categorize Inbox",
            text: " I found it easy to categorize the emails as 'Inbox'.",
          },
          {
            value: "Categorize Spam",
            text: "I found it easy to categorize the emails as 'Spam'.",
          },
          {
            value: "Categorize Bin",
            text: "I found it easy to categorize the emails as 'bin'.",
          },
        ],
      },
      {
        type: "text",
        name: "Red background",
        isRequired: true,
        title:
          "Which aspects of the phishing alert with the red background were helpful? (key words are enough)",
      },
      {
        type: "text",
        name: "Blocked Link",
        isRequired: true,
        title:
          "Which aspects of the phishing alert with the blocked link and the tooltip were helpful? (key words are enough)",
      },
      {
        type: "text",
        name: "Grey Overlay",
        isRequired: true,
        title:
          "Which aspects of the phishing alert with the grey overlay were helpful? (key words are enough)",
      },
    ],
  };

  componentDidMount() {
    let userID = this.props.userInfo.userID;
    this.setState({ userID: userID });
  }

  //Define a callback methods on survey complete
  onComplete = (survey, options) => {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    //Send to Server
    const data = {
      userID: this.state.userID,
      userAnswers: survey.data,
    };

    const response = fetch("/SurveyData", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(console.log("sentSurveyToServer"));
  };

  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.
    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
    /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
    //You may pass model properties directly into component or set it into model
    // <Survey.Survey model={model} mode="display"/>
    //or
    // model.mode="display"
    // <Survey.Survey model={model}/>
    // You may change model properties outside render function.
    //If needed react Survey Component will change its behavior and change UI.
  }
}

export default SurveyComponent;
