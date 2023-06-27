import React, { useEffect, useState, useRef } from 'react';
import { useSprings, animated, config } from 'react-spring';
import { carData } from "../../data/VehicleData.jsx";
import './modelData.css';

function ModelData() {
  const ref = useRef();
  const carListRef = useRef();
  const [selectedCar, setSelectedCar] = useState(carData[0]); 
  const [isScrollable, setIsScrollable] = useState(false);

  const checkCarListScroll = () => {
    const atBottom = carListRef.current.scrollHeight - carListRef.current.scrollTop === carListRef.current.clientHeight;
    setIsScrollable(!atBottom);
  };

  const animations = useSprings(carData.length, carData.map(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses,
  })));

  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 1200) {
        setIsScrollable(false);
        carListRef.current.removeEventListener('scroll', checkCarListScroll);
      } else {
        carListRef.current.addEventListener('scroll', checkCarListScroll);
        checkCarListScroll();
      }
    };

    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);

    const currentCarListRef = carListRef.current;

    return () => {
      window.removeEventListener('resize', checkWindowSize);
      if (currentCarListRef) {
        currentCarListRef.removeEventListener('scroll', checkCarListScroll);
      }
    };
  }, []);

  return (
    <div className='modelData--body' ref={ref}>
      <div className='modelData--title'>
        <div>Vehicle Models</div>
        <div>Our rental fleet</div>
        <div>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</div>
      </div>
      <div className='modelData--container'>
        <div className='modelData--cars-wrapper'>
          <div className='modelData--cars' ref={carListRef}>
          {carData.map((car, index) => (
              <animated.div 
                style={animations[index]} 
                key={`${car.name}-${car.model}`} 
                onClick={() => setSelectedCar(car)}
                className={selectedCar === car ? 'selected' : ''} 
              >
                {`${car.name} ${car.model}`}
              </animated.div>
            ))}
          </div>
          {isScrollable && <img src="../../arrow_down.png" alt="Scroll down" />}
        </div>
        <div className='modelData--image'>
          <animated.img style={animations[0]} src={selectedCar.image} alt="" />
        </div>
        <animated.div style={animations[0]} className='modelData--data'>
          <div>${selectedCar.price} / rent per day</div>
          <div>
            <div>Model</div>
            <div>{selectedCar.model}</div>
          </div>
          <div>
            <div>Mark</div>
            <div>{selectedCar.name}</div>
          </div>
          <div>
            <div>Year</div>
            <div>{selectedCar.year}</div>
          </div>
          <div>
            <div>Doors</div>
            <div>4 / 5</div>
          </div>
          <div>
            <div>ECO</div>
            <div>{selectedCar.ECO ? "Yes" : "No"}</div>
          </div>
          <div>
            <div>Transmission</div>
            <div>{selectedCar.transmission}</div>
          </div>
          <div>
            <div>Fuel</div>
            <div>{selectedCar.fuel}</div>
          </div>
          <div className='modelData--button'><button>RESERVE NOW</button></div>
        </animated.div>
      </div>
    </div>
  );
}

export default ModelData;
