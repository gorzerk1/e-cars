import React from 'react';
import './footer.css';

function Footer() {

  return (
    <div className='footer--body'>
      <div className='footer--container'>
        <div className='footer--smallBox footer--firstBox'>
          <div>CAR Rental</div>
          <div>We offers a big range of vehicles for all your driving needs. 
            We have the perfect car to meet your needs.
          </div>
          <div>
            <img src="" alt="" />
            <div>(123)-456-790</div>
            <div>carrental@yahoo.com</div>
          </div>
        </div>
        <div className='footer--smallBox'>
          <div>COMPANY</div>
          <div>Israel</div>
          <div>Carrers</div>
          <div>Mobile</div>
          <div>Blog</div>
          <div>How we work</div>
        </div>
        <div className='footer--smallBox'>
          <div>WORKING HOURS</div>
          <div>Sun - Fri: 9:00AM - 9:00PM</div>
          <div>Fri: 9:00AM - 7:00PM</div>
          <div>Sat: Closed.</div>
        </div>
        <div className='footer--smallBox footer--lastBox'>
          <div>SUBSCRIPTION</div>
          <div>Subscribe your Email address for latest news & updates.</div>
          <input type="text" name="" id="" placeholder='Enter Email Address'/>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
