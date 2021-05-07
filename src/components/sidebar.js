import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import EmailWindow from "./emailWindow";
import { grey } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor: "white",
    borderTop: "1px solid grey",
    borderBottom: "1px solid grey",
    display: "inline-flex",
    width: 980,
    height: 1000,
    marginTop: "20px",
  },
  tabs: {},
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(undefined);

  const [mailsViewTime, setMailsViewTime] = React.useState([])

  const handleChange = (event, newValue) => {
    setValue(newValue);

    //added
    passNewValue(newValue);
    // alert(newValue);
  };

  //hand over current Email into sidebar props for Ryan x)
  const passNewValue = (newValue) => {
    if (newValue === undefined || props.Mails[newValue] === undefined) {
      props.onNewEmail(0);
    } else {
      let selectedEmailID = props.Mails[newValue].mail.defaultProps.keyID;
      props.onNewEmail(selectedEmailID);
    }
  };

  const resetSelectedTab = () => {
    setValue(value);
    passNewValue(value + 1);
  };

  const forwardSelectedTab = () => {
    let newTab = value + 1;
    if (newTab > props.Mails.length - 1) {
      newTab = 0;
    }
    setValue(newTab);
    passNewValue(newTab);
  };

  const backSelectedTab = () => {
    let newTab = value - 1;

    if (newTab < 0) {
      newTab = props.Mails.length - 1;
    }
    setValue(newTab);
    passNewValue(newTab);
  };

  const styles = {
    largeParUnseen: {
      fontWeight: "bolder",
      textAlign: "left",
      fontSize: "12px",
      margin: "0",
      color: "black",
    },
    largeParSeen: {
      fontWeight: "300",
      textAlign: "left",
      fontSize: "12px",
      margin: "0",
      color: "black",
    },

    smallParUnseen: {
      textAlign: "left",
      margin: "0",
      fontSize: "8px",
      color: "black",
    },

    smallParSeen: {
      textAlign: "left",
      margin: "0",
      fontSize: "8px",
      color: "grey",
    },
  };

  return (
    <div>
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          style={{
            borderRight: "1px solid grey",
          }}
        >
          {props.Mails.map((email) => {
            let unseen = email.mail.defaultProps.unseen;
            return (
              <Tab
                onMouseEnter={() => {
                  props.outsideEmailInfo(
                    true,
                    `InTab ${email.mail.defaultProps.keyID}`
                  );
                }}
                onMouseLeave={() => {
                  props.outsideEmailInfo(
                    false,
                    `InTab ${email.mail.defaultProps.keyID}`
                  );
                }}
                style={{
                  fontSize: "10px",
                  textTransform: "none",
                  borderBottom: "1px solid grey",
                  margin: "0",
                  backgroundColor: "white",
                  width: "180px",
                }}
                label={
                  <div style={{ width: "175px" }}>
                    {email.mail.defaultProps.senderName ? (
                      <p
                        style={
                          unseen ? styles.largeParUnseen : styles.largeParSeen
                        }
                      >
                        {email.mail.defaultProps.senderName}
                      </p>
                    ) : (
                      <p
                        style={
                          unseen ? styles.largeParUnseen : styles.largeParSeen
                        }
                      >
                        {email.mail.defaultProps.sender}
                      </p>
                    )}
                    <p
                      style={
                        unseen ? styles.largeParUnseen : styles.largeParSeen
                      }
                    >
                      {email.mail.defaultProps.subject}
                    </p>
                    <p
                      style={
                        unseen ? styles.smallParUnseen : styles.smallParSeen
                      }
                    >
                      {email.mail.defaultProps.date}
                    </p>
                  </div>
                }
                {...a11yProps(props.Mails.indexOf(email))}
              />
            );
          })}
        </Tabs>

        {props.Mails.length === 0 && (
          <h1 style={{ margin: "0 auto", marginTop: "100px" }}>
            This inbox is empty
          </h1>
        )}

        {props.Mails.map((email) => {
          return (
            <TabPanel value={value} index={props.Mails.indexOf(email)}>
              <div
                style={{
                  overflowWrap: "break-word",
                }}
              >
                <EmailWindow
                  inEmailScrollAmount={props.inEmailScrollAmount}
                  emailAdress={props.Recipient}
                  userName={props.userName}
                  resetSelectedTab={resetSelectedTab}
                  onNewEmail={props.onNewEmail}
                  Email={email}
                  onMoveToSpam={props.onMoveToSpam}
                  onMoveToBin={props.onMoveToBin}
                  onMoveToImportant={props.onMoveToImportant}
                  onMoveEmailForward={forwardSelectedTab}
                  onMoveEmailBackward={backSelectedTab}
                  insideEmailInfo={props.insideEmailInfo}
                  timeCount = {props.timeCount}
                  parentName={props.parentName}
                ></EmailWindow>
              </div>
            </TabPanel>
          );
        })}
      </div>
    </div>
  );
}
