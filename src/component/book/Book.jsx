import React from 'react';
import './book.css';

function Book() {
  return (
    <div className='book--body'>
      <div className='book--container' style={{backgroundImage: 'url("../../form_background.png")', backgroundSize: 'cover'}}>
        <div>Book a car</div>
        <div className='book--grid'>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Select Your Car Type <span>*</span></label>
            </div>
            <select>
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
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Pick-up <span>*</span></label>
            </div>
            <select>
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
          </div>
          <div className='book--smallBox'>    
            <div className='book--title'>
              <img src="../../location.png" alt="" />
              <label>Drop-off <span>*</span></label>
            </div>
            <select>
              <option value="">Select a drop-off location</option>
              <option value="Tel-Aviv">Tel-Aviv</option>
              <option value="Petah-Tikva">Petah-Tikva</option>
              <option value="Beer-Sheva">Beer-Sheva</option>
              <option value="Rishon-LeTsiyon">Rishon-LeTsiyon</option>
              <option value="Eilot">Eilot</option>
              <option value="Holon">Holon</option>
              <option value="Natanya">Natanya</option>
              <option value="Haifa">Haifa</option>
            </select>
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Pick-up Date <span>*</span></label>
            </div>
            <input type="date"/>
          </div>
          <div className='book--smallBox'>
            <div className='book--title'>
              <img src="../../calendar.png" alt="" />
              <label>Drop-off Date <span>*</span></label>
            </div>
            <input type="date"/>
          </div>
          <div className='book--smallBox'>
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
