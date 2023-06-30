import React from 'react';
import '../assets/styles/ContactForm.css';
import { FaPhone, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import instagram from "../assets/images/instagram.svg";

const ContactForm = () => {
    return (
      <div className="container bg-defaultteal dark:bg-defaultsky">
        <div className="form shadow-[0_0_20px_1px_rgba(9,19,27,1)] dark:shadow-[0_0_20px_1px_rgba(141,241,201,1)]">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              Want to connect?
              <br />
              <br />
              Feel free to shoot me a message if you have questions for me, or
              you can simply drop by to say hi. I will get back to you soon.
            </p>

            <div className="info">
              <div className="information">
                <div className="icon" aria-hidden="true">
                  <FaMapMarkedAlt />
                </div>
                <p>Toronto, ON, CA</p>
              </div>
              <div className="information">
                <div className="icon" aria-hidden="true">
                  <FaEnvelope />
                </div>
                <p>kara.fang1@gmail.com</p>
              </div>
              {/* <div className="information">
                  <div className="icon" aria-hidden="true"><FaPhone/></div>
                  <p>+1(437)989-6552</p>
                </div> */}
            </div>

            <div className="social-media">
              <div className="social-icons">
                <a href="https://github.com/KaraFang?tab=repositories">
                  <img src={github} alt="Github" />
                </a>
                <a href="https://www.linkedin.com/in/kara-fang-6202b6167/">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/kara_180/">
                  <img src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              action="https://formsubmit.co/kara.fang1@gmail.com"
              method="POST"
              autoComplete="off"
            >
              <h3 className="title">Message me</h3>
              <input type="text" name="_honey" style={{ display: "none" }} />

              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://www.karafang.com/contact-success"
              />

              <div className="input-container">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  name="First&nbsp;Name"
                  className="input"
                  id="contact-fname"
                  onKeyUp={validateFName}
                />
                <span id="fname-error"></span>
              </div>
              <div className="input-container">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  name="Last&nbsp;Name"
                  className="input"
                  id="contact-lname"
                  onKeyUp={validateLName}
                />
                <span id="lname-error"></span>
              </div>
              <div className="input-container">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="Email"
                  className="input"
                  id="contact-email"
                  onKeyUp={validateEmail}
                />
                <span id="email-error"></span>
              </div>
              <div className="input-container textarea">
                <label htmlFor="">Message</label>
                <textarea
                  name="Message"
                  className="input"
                  id="contact-msg"
                  onKeyUp={validateMsg}
                ></textarea>
                <span id="msg-error"></span>
              </div>
              <button
                onClick={validateForm}
                className=" bg-defaultteal dark:bg-defaultsky hover:text-defaultamber hover:dark:text-defaultamber
                text-defaultsky dark:text-defaultteal rounded-full py-1 px-3"
              >
                Submit
              </button>
              <span id="submit-error"></span>
            </form>
          </div>
        </div>
      </div>
    );
}

var fNameError = document.getElementById('fname-error');
var lNameError= document.getElementById('lname-error');
var emailError = document.getElementById('email-error');
var msgError = document.getElementById('msg-error');
var submitError = document.getElementById('submit-error');

function validateFName() {
    var name = document.getElementById('contact-fname').value;

    if(name.length == 0) {
        fNameError.innerHTML = 'First name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/)) {
        fNameError.innerHTML = 'Enter valid first name';
        return false;
    }
    fNameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateLName() {
    var name = document.getElementById('contact-lname').value;

    if(name.length == 0) {
        lNameError.innerHTML = 'Last name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+[- ']{0,1}[a-zA-Z]+$/)) {
        lNameError.innerHTML = 'Enter valid last name';
        return false;
    }
    lNameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.innerHTML = 'Enter valid email';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateMsg() {
    var msg = document.getElementById('contact-msg').value;
    var required = 30;
    var left = required - msg.length;
    if(left > 0) {
        msgError.innerHTML = left + ' More characters required';
        return false;
    }
    msgError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if(!validateFName() || !validateLName() || !validateEmail() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Correct fields before submitting';
        setTimeout(function(){submitError.style.display = 'none';}, 6000);
        return false;
    }
}

export default ContactForm;