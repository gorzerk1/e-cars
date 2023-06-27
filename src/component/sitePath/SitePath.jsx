import React, { useContext } from 'react';
import { MyContext } from '../../data/ThemeProvider.jsx';
import './sitePath.css';

function SitePath() {
  const { currentPath } = useContext(MyContext);
  const pathName = currentPath.split("/")[1];

  // Function to capitalize the first letter of the string
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const formattedPathName = pathName ? capitalizeFirstLetter(pathName) : "";

  return (
    <div className='sitePath--body'>
      <div className="image-wrapper">
        <img src="../../guy_in_car.jpg" alt="" />
      </div>
      <div className='sitePath--container'>
        <div>{formattedPathName}</div>
        <div>Home / {formattedPathName}</div>
      </div>
    </div>
  );
}

export default SitePath;
