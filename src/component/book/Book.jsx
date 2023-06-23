import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './book.css';

function Book() {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Book");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

  const handleValidation = () => {
    let formIsValid = true;
    let errors = {};

    if (!carType || carType === "") {
      formIsValid = false;
      errors["carType"] = "Please select a car type";
    }
    if (!pickUp || pickUp === "") {
      formIsValid = false;
      errors["pickUp"] = "Please select a pick-up location";
    }
    if (!dropOff || dropOff === "") {
      formIsValid = false;
      errors["dropOff"] = "Please select a drop-off location";
    }
    if (!pickUpDate || new Date(pickUpDate) < tomorrow) {
      formIsValid = false;
      errors["pickUpDate"] = "Pick-up date must be at least tomorrow";
    }
    if (!dropOffDate || new Date(dropOffDate) < dayAfterTomorrow) {
      formIsValid = false;
      errors["dropOffDate"] = "Drop-off date must be at least the day after tomorrow";
    }
    setErrors(errors);
    return formIsValid;
  };

  useEffect(() => {
    if(buttonText === "img") {
      setTimeout(() => {
        setButtonText("Thank you, we will contact you.");
        setButtonDisabled(true);
      }, 2000 + Math.random() * 4000); 
    }
  }, [buttonText]);

  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form submitted');
      setButtonText("img");
      setButtonDisabled(true);
    }
  };

  const bookBodyRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);  // new state

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting && !animationDone) {  // added animationDone condition
          setIsInViewport(true);
          setAnimationDone(true);  // set animationDone to true
        }
      },
      { threshold: 0.6 }
    );

    if (bookBodyRef.current) {
      observer.observe(bookBodyRef.current);
    }

    return () => observer.disconnect();
  }, [animationDone]);

  const select1Props = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    config: {duration: 1000},
  });

  const select2Props = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    delay: 1000,
    config: {duration: 1000},
  });

  const select3Props = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    delay: 1500,
    config: {duration: 1000},
  });

  const select4Props = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    delay: 2000,
    config: {duration: 1000},
  });
  const select5Props = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    delay: 2500,
    config: {duration: 1000},
  });

  const buttonProps = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: isInViewport ? 1 : 0, transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'},
    delay: 3000,
    config: {duration: 1000},
  });
  return (
    <div ref={bookBodyRef} className='book--body'>
      <div className='book--container' style={{backgroundImage: 'url("../../form_background.png")', backgroundSize: 'cover'}}>
        <div>Book a car</div>
        <form onSubmit={handleSubmit} className='book--grid'>
          <animated.div style={select1Props} className='book--smallBox'>
            <div className='book--title'>
              <img src="../../car_icon.png" alt="" />
              <label>Select Your Car Type <span>*</span></label>
            </div>
            <select onChange={e => setCarType(e.target.value)} value={carType}>
              <option value="">Select a car type</option>
              <option value="Tesla Model 3">Tesla Model 3</option>
              <option value="Toyota RAV 4">Toyota RAV 4</option>
              <option value="Nissan Sentra">Nissan Sentra</option>
              <option value="Toyota Yaris">Toyota Yaris</option>
              <option value="BMW sedan 5">BMW sedan 5</option>
              <option value="BMW Coupe 2">BMW Coupe 2</option>
              <option value="Mazda 6">Mazda 6</option>
              <option value="Ssangyong Rexton">Ssangyong Rexton</option>
              <option value="Honda Civic Type R">Honda Civic Type R</option>
              <option value="Chery tiggo 8 pro">Chery Tiggo 8 Pro</option>
            </select>
            <span className='book--error'>{errors["carType"]}</span>
          </animated.div>
          <animated.div style={select2Props} className='book--smallBox'>
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Pick-up <span>*</span></label>
            </div>
            <select onChange={e => setPickUp(e.target.value)} value={pickUp}>
              <option value="">Select a pick-up location</option>
              <option value="Tel-Aviv">Tel-Aviv</option>
              <option value="Petah-Tikva">Petah-Tikva</option>
              <option value="Beer-Sheva">Beer-Sheva</option>
              <option value="Rishon-LeTsiyon">Rishon-LeTsiyon</option>
              <option value="Eilot">Eilot</option>
              <option value="Holon">Holon</option>
              <option value="Natanya">Natanya</option>
              <option value="Haifa">Haifa</option>
            </select>
            <span className='book--error'>{errors["pickUp"]}</span>
          </animated.div>
          <animated.div style={select3Props} className='book--smallBox'>    
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Drop-off <span>*</span></label>
            </div>
            <select onChange={e => setDropOff(e.target.value)} value={dropOff}>
              <option value="">Select a pick-off location</option>
              <option value="Tel-Aviv">Tel-Aviv</option>
              <option value="Petah-Tikva">Petah-Tikva</option>
              <option value="Beer-Sheva">Beer-Sheva</option>
              <option value="Rishon-LeTsiyon">Rishon-LeTsiyon</option>
              <option value="Eilot">Eilot</option>
              <option value="Holon">Holon</option>
              <option value="Natanya">Natanya</option>
              <option value="Haifa">Haifa</option>
            </select>
            <span className='book--error'>{errors["dropOff"]}</span>
          </animated.div>
          <animated.div style={select4Props} className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Pick-up Date <span>*</span></label>
            </div>
            <input type="date" min={tomorrow.toISOString().split('T')[0]} value={pickUpDate} onChange={e => setPickUpDate(e.target.value)}/>
            <span className='book--error'>{errors["pickUpDate"]}</span>
          </animated.div>
          <animated.div style={select5Props} className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Drop-off Date <span>*</span></label>
            </div>
            <input type="date" min={dayAfterTomorrow.toISOString().split('T')[0]} value={dropOffDate} onChange={e => setDropOffDate(e.target.value)}/>
            <span className='book--error'>{errors["dropOffDate"]}</span>
          </animated.div>
          <animated.div style={buttonProps} className='book--smallBox book--button'>
            <button type="submit" disabled={buttonDisabled}>
              {buttonText === "img" ? (
                <img src="../../rolling.gif" alt="Processing" />
              ) : (
                buttonText
              )}
            </button>
            <div className='book--error'></div>
          </animated.div>
        </form>
      </div>
    </div>
  );
}

export default Book;
