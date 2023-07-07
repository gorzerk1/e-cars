import React from 'react';
import './installApp.css';

function InstallApp() {

  return (
    <div className='installApp--body'>
      <div className='installApp--container'>
        <div className='installApp--leftBox'>
          <div>Download our app to get most out of it</div>
          <div>
          Fast, easy, all from your phone - that's our app for you. 
          Need a car rental? Just a few taps and you're set. 
          No fuss, no stress. 
          Download our app, make your life easier, and hit the road faster!
          </div>
          <div className='installApp--button'>
            <img src="../../googleStore.svg" alt="" />
            <img src="../../appleStore.svg" alt="" />
          </div>
        </div>
        <div className='installApp--rightBox'>
          <img src="../../phone.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default InstallApp;
