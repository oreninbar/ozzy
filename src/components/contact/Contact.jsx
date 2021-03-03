import React, { useState } from "react";
import axios from "axios";
import Approval from "./send-approval/Approval";

import "./Contact.css";

export default function Contact() {
  const [popup_status, setStatus] = useState(false);
  const [contact, setContact] = useState({
    inputName: "",
    inputEmail: "",
    inputPhone: "",
  });
  let changePopupStatus = () => {
    setStatus(!popup_status);
  };

  let handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  let sendContact = async () => {
    console.log("enterToSentContact");
    await axios.post(`http://localhost:8080/save_contact`, contact).then(
      (response) => {
        console.log(response);
        changePopupStatus();
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div
      className="contact-container"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h1 className="heading-contact">Let's talk</h1>
      <div className="contact_form">
        <input
          type="text"
          className="enter_name_input input"
          placeholder="Full name..."
          name="inputName"
          value={contact.inputName}
          onChange={handleInput}
        />
        <input
          type="text"
          className="enter_email_input"
          placeholder="Email..."
          name="inputEmail"
          value={contact.inputEmail}
          onChange={handleInput}
        />
        <input
          type="text"
          className="enter_phone_input input"
          placeholder="Phone number..."
          name="inputPhone"
          value={contact.inputPhone}
          onChange={handleInput}
        />
        <button onClick={sendContact} className="btn_contact_form btn">
          Get in touch
        </button>
        {popup_status ? (
          <Approval changePopupStatus={changePopupStatus} />
        ) : null}
      </div>
    </div>
  );
}
