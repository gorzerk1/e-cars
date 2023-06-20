import React from 'react';
import './modelData.css';

function ModelData() {
  return (
    <div className='modelData--body'>
      <div className='modelData--title'>
        <div>Vehicle Models</div>
        <div>Our rental fleet</div>
        <div>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</div>
      </div>
      <div className='modelData--container'>
        <div className='modelData--cars'>
          <div>Tesla Model 3</div>
          <div>Toyota RAV 4</div>
          <div>Nissan Sentra</div>
          <div>Toyota Yaris</div>
          <div>BMW Sedan 5</div>
          <div>BMW Coupe 2</div>
        </div>

        <div className='modelData--image'>
          <img src="../../ssangyong-rexton.png" alt="" />
        </div>

        <div className='modelData--data'>
          <div>$25 / rent per day</div>
          <div>
            <div>Model</div>
            <div>Passat CC</div>
          </div>
          <div>
            <div>Mark</div>
            <div>Volkswagen</div>
          </div>
          <div>
            <div>Year</div>
            <div>2008</div>
          </div>
          <div>
            <div>Doors</div>
            <div>4/5</div>
          </div>
          <div>
            <div>ECO</div>
            <div>Yes</div>
          </div>
          <div>
            <div>Transmission</div>
            <div>Automatic</div>
          </div>
          <div>
            <div>Fuel</div>
            <div>Gasoline</div>
          </div>
          <div className='modelData--button'><button>RESERVE NOW</button></div>
        </div>
      </div>
    </div>
  );
}

export default ModelData;
