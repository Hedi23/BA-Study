const express = require("express"); //Express to run our app
const app = express(); //Initiate the appconst bodyParser = require('body-parser');//Parse JSON requests
const path = require("path"); //Navigate to build folder
const bodyParser = require("body-parser");
const { client } = require("./config");
const helmet = require("helmet");

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(helmet());

// app.use(express.static(path.join(__dirname, "build")));
const publicPath = path.join(__dirname, 'build');
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port", port);
});

app.get("/connect", (req, res) => {
  //Create Table On connection

  client.query(
    `SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES`,
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        let number = parseInt(results.rows[0].count, 10);
        let newUser = number + 1;
        createTable(newUser);
        let newUserObj = {
          userID: newUser,
        };
        res.send(newUserObj);
      }
    }
  );

  //API logic
  console.log(req.headers["user-agent"]);

  function createTable(newUser) {
    //Create Table On connection
    client.query(
      `CREATE TABLE USER${newUser}(
      ID SERIAL PRIMARY KEY NOT NULL, 
      USERINFO json,
      USERSURVEYINFO json,
      USERACCINFO json,
      RESULTINBOX json
      )`,
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          console.log("created table for user" + newUser);
        }
      }
    );
  }
});

//API post request also before serving React
app.post("/data", (req, res) => {
  //userData Array of Json Objects
  let userData = req.body;
  //console.log(`receiving data from ${userData[0].userId} `);
  userData.forEach((element) => {
    if (element.userId === 0 || element.userId === undefined) return;
    let jsonObject = JSON.stringify(element);

    client.query(
      `INSERT INTO USER${element.userId} (USERINFO) VALUES ('${jsonObject}')`,
      (error, results) => {
        if (error) {
          throw error;
        }
      }
    );
  });
  res.send(userData);
});

app.post("/SurveyData", (req, res) => {
  let userDataS = req.body;
  let jsonObjectS = JSON.stringify(userDataS);
  console.log(userDataS);
  setTimeout(function () {
    client.query(
      `INSERT INTO USER${userDataS.userID} (USERSURVEYINFO) VALUES ('${jsonObjectS}')`,
      (error, results) => {
        if (error) {
          console.log(`error when inserting surveyData ${error}`);
        } else {
          console.log("Entered Survey Data");
        }
      }
    );
  }, 1000);

  res.send(userDataS);
});

app.post("/accuracyInfo", (req, res) => {
  //userData Array of Json Objects
  let userAccData = req.body;
  console.log(`Number of accuracy samples received: ${userAccData.length}`);
  let jsonObjectAcc = JSON.stringify(userAccData);

  client.query(
    `INSERT INTO USER${userAccData[0][0]} (USERACCINFO) VALUES ('${jsonObjectAcc}')`,
    (error, results) => {
      if (error) {
        console.log(`error when inserting Accuracy Data ${error}`);
      }
    }
  );

  res.send(userAccData);
});

app.post("/resultInbox", (req, res) => {
  let resultInbox = req.body;
  console.log(resultInbox);
  let jsonObjectInbox = JSON.stringify(resultInbox);

  client.query(
    `INSERT INTO USER${resultInbox.userID} (RESULTINBOX) VALUES ('${jsonObjectInbox}')`,
    (error, results) => {
      if (error) {
        console.log(`error when inserting result Inbox ${error}`);
      }
    }
  );

  res.send(resultInbox);
});

app.use(express.static(publicPath));
//Serving React
app.get("*", (req, res) => {
  // res.sendFile(path.join(__dirname, "build/index.html"));
  res.sendFile(path.join(publicPath, 'index.html'));
});
