import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { mail5 } from "./mail5";

class BlockingLinkModal extends Component {
  state = {
    redirect: false,
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={``} />;
    }
  };
  render() {
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              This link might be phishing
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body"></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => {
                this.setRedirect();
              }}
            >
              proceed to link
            </button>
            {this.renderRedirect()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});
export default BlockingLinkModal;
