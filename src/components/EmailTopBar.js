import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import LabelIcon from "@material-ui/icons/Label";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import PrintIcon from "@material-ui/icons/Print";
import { Snackbar } from "@material-ui/core";

class EmailTopBar extends Component {
  state = {
    printMessage: false,
  };

  render() {
    const handleClick = () => {
      this.setState({ printMessage: true });
    };

    const handleClose = () => {
      this.setState({ printMessage: false });
    };

    var styles = {
      buttonsTopBar: {
        marginLeft: "10px",
        backgroundColor: "white",
      },

      navButton: {
        marginLeft: "10px",
        backgroundColor: "white",
      },

      buttonIcons: {
        marginLeft: "10px",
        backgroundColor: "white",
      },
    };

    return (
      <div
        style={{
          width: "750px",
          marginBottom: "10px",
        }}
      >
        <Button
          style={styles.buttonsTopBar}
          variant="outlined"
          startIcon={<LabelIcon style={styles.buttonIcons} />}
          onClick={handleClick}
        >
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>
        <Button
          style={styles.buttonsTopBar}
          variant="outlined"
          startIcon={<PrintIcon style={styles.buttonIcons} />}
          onClick={handleClick}
        >
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>

        <Button
          style={styles.buttonsTopBar}
          variant="outlined"
          startIcon={<InfoIcon style={styles.buttonIcons} />}
          onClick={handleClick}
        >
          {" "}
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={this.state.printMessage}
            autoHideDuration={1000}
            message="Function is disabled"
            onClose={handleClose}
          ></Snackbar>
        </Button>

        <Button
          style={styles.navButton}
          variant="outlined"
          startIcon={<KeyboardArrowLeftIcon style={styles.buttonIcons} />}
          onClick={this.props.onMoveEmailBackward}
        ></Button>
        <Button
          style={styles.navButton}
          variant="outlined"
          startIcon={<KeyboardArrowRightIcon style={styles.buttonIcons} />}
          onClick={this.props.onMoveEmailForward}
        ></Button>
      </div>
    );
  }
}

export default EmailTopBar;
