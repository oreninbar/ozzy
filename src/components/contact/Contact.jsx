import React, { Component } from "react";
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
          <a href="" className="btn_contact_form btn">
            Get in touch
          </a>
        </div>
      </div>
    );
  }
}
export default Contact;
