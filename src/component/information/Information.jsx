import React from 'react';
import './information.css';

function Information() {
  return (
    <div className='information--body'>
      <div className='information--container'>
        <div className='information--title'>
          <div>Plan your trip now</div>
          <div>Quick & easy car rental</div>
        </div>
        <div className='information--data'>
          <div className='information--smallBox'>
          <div><img src="../../information_img2.png" alt="" /></div>
            <div>Select Car</div>
            <div>We offers a big range of vehicles for all your driving needs.
               We have the perfect car to meet your needs.
            </div>
          </div>
          <div className='information--smallBox'>
          <div><img src="../../information_img.png" alt="" /></div>
            <div>Contact Operator</div>
            <div>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</div>
          </div>
          <div className='information--smallBox'>
            <div><img src="../../information_img3.png" alt="" /></div>
            <div>Let's Drive</div>
            <div>Whether you're hitting the open road, we've got you covered with our wide range of cars.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
