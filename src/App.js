import React from "react";
import EmailClient from "./components/emailClient.js";
import StartPage from "./components/startPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tracker from "./components/Tracker";
import SurveyComponent from "./components/SurveyComponent";
import ConsentPage from "./components/ConsentPage";

function App() {
  let userInfo = {
    userName: "max mustermann",
    emailAdress: "max_mustermann@example.com",
    userID: 0,
  };

  const updateUserInfo = (adress, name) => {
    userInfo.userName = name;
    userInfo.emailAdress = adress;
  };

  const setUserID = (userID) => {
    userInfo.userID = userID;
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <StartPage />} />
        <Route
          path="/EmailClient"
          render={() => (
            <Tracker userInfo={userInfo} userID={setUserID}></Tracker>
          )}
        />
        <Route
          path="/SurveyComponent"
          render={() => <SurveyComponent userInfo={userInfo}></SurveyComponent>}
        />
        <Route
          path="/ConsentPage"
          render={() => (
            <ConsentPage updatedData={updateUserInfo}></ConsentPage>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
