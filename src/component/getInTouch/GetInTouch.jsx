import React, { useState } from 'react';
import './getInTouch.css';

function GetInTouch() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send Message");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!fullName || fullName === "") {
      formIsValid = false;
      errors["fullName"] = "Please enter your full name";
    }
    if (!email || email === "") {
      formIsValid = false;
      errors["email"] = "Please enter your email";
    }
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form submitted');
      setButtonText("img");
      setButtonDisabled(true);
      setTimeout(() => {
        setButtonText("Thank you, we will contact you.");
      }, 2000 + Math.random() * 4000);
    }
  };

  return (
    <div className='getInTouch--body'>
        <div className='getInTouch--image'>
          <img src="../../world.png" alt="" />
        </div>
      <div className='getInTouch--container'>
        <div className='getInTouch--leftBox'>
          <div>Need additional information?</div>
          <div>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</div>
          <div>
            <div>
              <img src="../../phone_icon.png" alt="" />
              <div>(123) 456-7869</div>
            </div>
            <div>
              <img src="../../mail.png" alt="" />
              <div>carrental@gmail.com</div>
            </div>
            <div>
              <img src="../../location.png" alt="" />
              <div>Israel, Tel-Aviv</div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='getInTouch--rightBox'>
          <div>
            <div>Full Name<span>*</span></div>
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
            <span className='book--error'>{errors["fullName"]}</span>
          </div>
          <div>
            <div>Email<span>*</span></div>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <span className='book--error'>{errors["email"]}</span>
          </div>
          <div>
            <div>Tell us about it</div>
            <textarea value={message} onChange={e => setMessage(e.target.value)}/>
            <span className='book--error'>{errors["message"]}</span>
          </div>
          <button type="submit" disabled={buttonDisabled}>
            {buttonText === "img" ? (
              <img src="../../rolling.gif" alt="Processing" />
            ) : (
              buttonText
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
