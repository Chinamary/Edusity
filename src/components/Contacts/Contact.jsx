import React from "react";
import "./Contact.css";
import msgIcon from "/src/assets/msg-icon.png";
import emailIcon from "/src/assets/mail-icon.png";
import phoneIcon from "/src/assets/phone-icon.png";
import locationIcon from "/src/assets/location-icon.png";
import whiteArrow from "/src/assets/white-arrow.png";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="msg-info">
        <h3>
          Send us a message <img src={msgIcon} alt="msgIcon" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <div className="contact-info">
          <div className="each-contact-info">
            <img src={emailIcon} alt="emailIcon" />
            <p>Contact@GreatCoders.dev</p>
          </div>
          <div className="each-contact-info">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>+123-456-7890</p>
          </div>
          <div className="each-contact-info">
            <img src={locationIcon} alt="locationIcon" />
            <p>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form action="">
          <p>
            <label>Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="Name"
              id="name"
            />
          </p>
          <p>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone number"
              id="phone_no"
              placeholder="Enter your mobile number"
            />
          </p>
          <p>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email id"
            />
          </p>
          <p>
            <label>Write your messages here</label>
            <textarea
              name="msg"
              id="msg"
              placeholder="Enter your message"
              rows="10"
            ></textarea>
          </p>
          <button className="btn blue">
            Submit now <img src={whiteArrow} alt="arrow" />
          </button>
        </form>
        <span>Email successfully sent</span>
      </div>
    </div>
  );
};

export default Contact;
