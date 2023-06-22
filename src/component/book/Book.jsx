import React, { useState } from 'react';
import './book.css';

function Book() {
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");
  const [errors, setErrors] = useState({});

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

  const handleSubmit = e => {
    e.preventDefault();
    if (handleValidation()) {
      console.log('Form submitted');
    }
  };

  return (
    <div className='book--body'>
      <div className='book--container' style={{backgroundImage: 'url("../../form_background.png")', backgroundSize: 'cover'}}>
        <div>Book a car</div>
        <form onSubmit={handleSubmit} className='book--grid'>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Select Your Car Type <span>*</span></label>
            </div>
            <select onChange={e => setCarType(e.target.value)} value={carType}>
              <option value="">Select a car type</option>
              <option value="Tesla Model 3">Tesla Model 3</option>
              {/* Other options */}
            </select>
            <span className='error'>{errors["carType"]}</span>
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Pick-up <span>*</span></label>
            </div>
            <select onChange={e => setPickUp(e.target.value)} value={pickUp}>
              <option value="">Select a pick-up location</option>
              <option value="Tel-Aviv">Tel-Aviv</option>
              {/* Other options */}
            </select>
            <span className='error'>{errors["pickUp"]}</span>
          </div>
          <div className='book--smallBox'>    
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Drop-off <span>*</span></label>
            </div>
            <select onChange={e => setDropOff(e.target.value)} value={dropOff}>
              <option value="">Select a drop-off location</option>
              <option value="Tel-Aviv">Tel-Aviv</option>
              {/* Other options */}
            </select>
            <span className='error'>{errors["dropOff"]}</span>
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Pick-up Date <span>*</span></label>
            </div>
            <input type="date" min={tomorrow.toISOString().split('T')[0]} value={pickUpDate} onChange={e => setPickUpDate(e.target.value)}/>
            <span className='error'>{errors["pickUpDate"]}</span>
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Drop-off Date <span>*</span></label>
            </div>
            <input type="date" min={dayAfterTomorrow.toISOString().split('T')[0]} value={dropOffDate} onChange={e => setDropOffDate(e.target.value)}/>
            <span className='error'>{errors["dropOffDate"]}</span>
          </div>
          <div className='book--smallBox book--button'>
            <div></div>
            <button type="submit">Book</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Book;
