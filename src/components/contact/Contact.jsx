import React, { Component } from "react";
import axios from 'axios'

import './Contact.css'

class Contact extends Component {
  constructor(){
    super();
    this.state={
      inputName:"",
      inputEmail:"",
      inputPhone:"",
    }
  }

  handleInput = (e) => {
    let input=e.target.value;
    this.setState({
      [e.target.name]:input,
    })

  };

  sendContact=async() =>{
    let contact= this.state
    await axios.post(`/contact`,contact).then()
  }

  render() {
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
            value={this.state.inputName}
            onChange={this.handleInput}
          />
          <input
            type="text"
            className="enter_email_input"
            placeholder="Email..."
            name="inputEmail"
            value={this.state.inputEmail}
            onChange={this.handleInput}
          />
          <input
            type="text"
            className="enter_phone_input input"
            placeholder="Phone number..."
            name="inputPhone"
            value={this.state.inputPhone}
            onChange={this.handleInput}
          />
          <button onClick={this.sendContact} className="btn_contact_form btn">
            Get in touch
          </button>
        </div>
      </div>
    );
  }
}
export default Contact;
