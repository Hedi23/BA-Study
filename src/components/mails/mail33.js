import React, { Component } from "react";
import "./MailsDefault.css";

class Mail33 extends Component {
  state = {};
  render() {
    return (
      <div>
        <div dir="ltr">
          Dear team at Global-Connect,
          <div>
            <br />
          </div>
          <div>On 26.06. I provided you with feedback on your questions.</div>
          <div>
            <br />
          </div>
          <div>
            Is there anything else I can assist you with? Would you like to get
            a free demo of the software in order to discuss questions live and
            check out the functionality of the software?
          </div>
          <div>
            <br />
          </div>
          <div>
            Best wishes,
            <br />
          </div>
          <div>Dr. Henry Burg</div>
          <div>
            <br />
          </div>
          <div>
            <table width={350} cellSpacing={0} cellPadding={0} border={0}>
              <tbody>
                <tr>
                  <td
                    style={{ fontSize: "8pt" }}
                    valign="top"
                    bgcolor="#ffffff"
                    align="left"
                  >
                    <br />
                    <font
                      style={{ fontSize: "9pt" }}
                      face="Arial, sans-serif;"
                      color="#000000"
                    >
                      <b>Dr. Henry Burg</b>
                      <br />
                      Director of Academic Client Solutions DACH
                    </font>
                    <br />
                    <img
                      alt=""
                      src="https://ci3.googleusercontent.com/proxy/a3_3xKIZCOZDow_3_CYBTrXQeYqmAK3em8G6NzmB4AtHnASlnMREJZ7Y_-77IHebePku8o1LRVL8Ug=s0-d-e1-ft#https://i.xink.io/Images/Get/i38/i4.png"
                      width={200}
                      height={50}
                      border={0}
                    />
                    <br />
                    Website:{" "}
                    <a
                      href="https://imotions.com"
                      target="_blank"
                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://imotions.com&source=gmail&ust=1597328626120000&usg=AFQjCNHl3kybnqokOaVTzC9Dn4rQOrmNMQ"
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
                      https://imotions.com
                    </a>
                    <br />
                    Zentrale: +49 (0)30-92078820
                    <br />
                    FAX: +49 (0)30-92068921
                    <br />
                    Direkt: +49 (0)151-63987568 <br />
                    <a
                      href="https://www.google.com/maps/search/Landsberger+Str.+218?entry=gmail&source=g"
                      target="_blank"
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
                      Landsberger Str. 118
                    </a>{" "}
                    (3rd floor)
                    <br />
                    13683 Berlin (Germany)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

Mail33.defaultProps = {
  senderName: "Henry Burg",
  sender: "henry.burg@imotion.com",
  date: "July 16, 2020, 12:52",
  subject: "Re: Anfrage",
  capital: "I",
  keyID: 33,
  avatarColor: "orange",
  unseen: true,
};

export default Mail33;
