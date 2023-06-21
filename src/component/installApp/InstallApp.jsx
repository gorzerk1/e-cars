import React from 'react';
import './installApp.css';

function InstallApp() {

  return (
    <div className='installApp--body'>
      <div className='installApp--container'>
        <div className='installApp--leftBox'>
          <div>Download our app to get most out of it</div>
          <div>
          Thrown shy denote ten ladies though ask saw. 
          Or by to he going think order event music. 
          Incommode so intention defective at convinced. 
          Led income months itself and houses you.
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
