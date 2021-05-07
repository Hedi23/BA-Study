import React, { Component } from "react";
import "./MailsDefault.css";

class Mail34 extends Component {
  //legitim
  state = {};
  render() {
    return (
      <div>
        <div>
          <p>
            <span style={{ fontSize: "13px" }}>
              <span style={{ fontFamily: "arial,helvetica,sans-serif" }}>
                <span style={{ fontSize: "14px" }}>
                  Hi {this.props.userName},
                  <br />
                  <br />
                  Thank you for contacting us at iMotions!
                  <br />
                  <br />
                  Our aim is to have a dedicated specialist reach out to you
                  within 24 hours (except weekends and holidays, of
                  course).&nbsp;&nbsp;
                  <br />
                  <br />
                  In the meantime, feel free to check out some videos about how
                  some of our 1,000 clients use the&nbsp;
                  <a
                    href="https://go.imotions.com/e/271012/cases-/nt66g/319619503?h=AtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g"
                    style={{ color: "#49aedd" }}
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://go.imotions.com/e/271012/cases-/nt66g/319619503?h%3DAtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g&source=gmail&ust=1597329360569000&usg=AFQjCNEm9NMbQbJ_jNbu0dxGgmhqQMHhrA"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink1");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink1");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink1");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink1");
                    }}
                  >
                    iMotions biosensor platform
                  </a>
                  , or head to our{" "}
                  <a
                    href="https://go.imotions.com/e/271012/-support/kd7z2/319619503?h=AtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g"
                    style={{ color: "#49aedd" }}
                    target="_blank"
                    data-saferedirecturl="https://www.google.com/url?hl=de&q=https://go.imotions.com/e/271012/-support/kd7z2/319619503?h%3DAtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g&source=gmail&ust=1597329360569000&usg=AFQjCNEGpQs_AT88_fxuDHVHWMvxvbdCfQ"
                    onMouseEnter={() => {
                      this.props.insideEmailInfo(true, "InLink2");
                    }}
                    onMouseLeave={() => {
                      this.props.insideEmailInfo(false, "InLink2");
                    }}
                    onMouseOver={() => {
                      this.props.insideEmailInfo(true, "InLink2");
                    }}
                    onClick={() => {
                      this.props.insideEmailInfo(true, "ClickedLink2");
                    }}
                  >
                    Support page
                  </a>{" "}
                  if you're looking for guidance on troubleshooting.&nbsp;
                </span>
                <br />
                <br />
                <br />
                <span style={{ fontSize: "14px" }}>
                  <span style={{ fontFamily: "arial,helvetica,sans-serif" }}>
                    Best regards,
                    <br />
                    <br />
                    <strong>
                      <br />
                      &nbsp; &nbsp;Kate Cornwell
                    </strong>
                    <br />
                    &nbsp; &nbsp;Engagement Specialist
                  </span>
                </span>
                <br />
                <br />
                <br />
                <span style={{ fontSize: "14px" }}>
                  <span style={{ fontFamily: "arial,helvetica,sans-serif" }}>
                    <img
                      alt="imotions logo"
                      style={{
                        width: "191px",
                        height: "49px",
                        borderWidth: "0px",
                        borderStyle: "solid",
                      }}
                      src="https://ci6.googleusercontent.com/proxy/_InlTKwFoP0xOz5uUUfBmNvD__Zd112JexWVW31XuozIwphDpuw5U8O9-mYCNbDQkBkuM5KB6bBQgdCjwObzTC8Dh0q5JWtScA20zp3mkhOKFKWozisrrhdW2oFl-fmPvZ3bk8_XW8qF8zEssjKfXA=s0-d-e1-ft#http://go.imotions.com/l/271012/2019-01-25/hmzds/271012/74145/iMotions_logo_nb_wo_tagline.png"
                      width={191}
                      height={49}
                      border={0}
                    />
                  </span>
                </span>
                <br />
                <br />
                <span style={{ fontSize: "12px" }}>
                  <span style={{ fontFamily: "arial,helvetica,sans-serif" }}>
                    Website:
                    <a
                      href="https://go.imotions.com/e/271012/2020-04-30/w6x8j/319619503?h=AtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g"
                      target="_blank"
                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://go.imotions.com/e/271012/2020-04-30/w6x8j/319619503?h%3DAtoOLcrq68Ly-nqNcuUhDv7xdGCX6xtA3BkTQjQOg_g&source=gmail&ust=1597329360569000&usg=AFQjCNHxa3bk_5mYSvUxgmNLYqiRV2U28Q"
                      onMouseEnter={() => {
                        this.props.insideEmailInfo(true, "InLink3");
                      }}
                      onMouseLeave={() => {
                        this.props.insideEmailInfo(false, "InLink3");
                      }}
                      onMouseOver={() => {
                        this.props.insideEmailInfo(true, "InLink3");
                      }}
                      onClick={() => {
                        this.props.insideEmailInfo(true, "ClickedLink3");
                      }}
                    >
                      imotions.com
                    </a>
                    <br />
                    Main office: +1 617-520-4958
                  </span>
                </span>
              </span>
            </span>
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <span style={{ fontSize: "10px" }}>
              <span style={{ fontFamily: "arial,helvetica,sans-serif" }}>
                <span style={{ color: "#a9a9a9" }}>
                  If you don't want to hear more from me, please
                </span>
                <a
                  href="https://go.imotions.com/emailPreference/e/epc/271012/SQOKPdFI8iItdTAYJzoyNG3lhLfqaPKcXiJ2cn7R8xM/44/54f8dff53d8bbf06653432db339239d9acff5308bccd289d6bef353e4b0f948e/319619503"
                  style={{ textDecoration: "underline", color: "#d3d3d3" }}
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?hl=de&q=https://go.imotions.com/emailPreference/e/epc/271012/SQOKPdFI8iItdTAYJzoyNG3lhLfqaPKcXiJ2cn7R8xM/44/54f8dff53d8bbf06653432db339239d9acff5308bccd289d6bef353e4b0f948e/319619503&source=gmail&ust=1597329360569000&usg=AFQjCNF5kaOQuVw-lBojF1dmt9SuBPSqNg"
                  onMouseEnter={() => {
                    this.props.insideEmailInfo(true, "InLink4");
                  }}
                  onMouseLeave={() => {
                    this.props.insideEmailInfo(false, "InLink4");
                  }}
                  onMouseOver={() => {
                    this.props.insideEmailInfo(true, "InLink4");
                  }}
                  onClick={() => {
                    this.props.insideEmailInfo(true, "ClickedLink4");
                  }}
                >
                  <span style={{ color: "#a9a9a9" }}>let me know</span>
                </a>
                <span style={{ color: "#a9a9a9" }}>.</span>
              </span>
            </span>
          </p>
          <img
            alt=""
            src="https://ci5.googleusercontent.com/proxy/cjerHJfIa8R6JHKqhiTRyEZHh7POYCioYyuadPmHhHKxEUKtYOFSpVs9EvA71tnQGaPMKPB7VUxWfqQ38aptOIA0qoMniw=s0-d-e1-ft#https://go.imotions.com/r/271012/1/319619503/open/1"
          />{" "}
        </div>
      </div>
    );
  }
}

Mail34.defaultProps = {
  senderName: "Kate Cornwell",
  sender: "kate.cornwell@imotions.com",
  date: "July 01, 2020, 13:11",
  subject: "Thank you for contacting iMotions",
  capital: "I",
  keyID: 34,
  avatarColor: "orange",
  unseen: true,
};

export default Mail34;
