import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './modelData.css';

function ModelData() {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);
  const checkScroll = () => {
    const scrollPercent = (ref.current.getBoundingClientRect().top) / window.innerHeight;
    if (scrollPercent < 0.4) {
      setIsInView(true);
    }
  };

  const animations = [
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 0,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 500,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 1000,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 1500,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay:2000,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 2500,
      config: { duration: 1000 },
    }),
    useSpring({
      from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
      to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
      delay: 3000,
      config: { duration: 1000 },
    }),
  ];
  const imgAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    to: { opacity: isInView ? 1 : 0, transform: isInView ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)' },
    delay: 0,
    config: { duration: 1000 },
});

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isInView]);

  const cars = ['Tesla Model 3', 'Toyota RAV 4', 'Nissan Sentra', 'Toyota Yaris', 'BMW Sedan 5', 'BMW Coupe 2'];

  return (
    <div className='modelData--body' ref={ref}>
      <div className='modelData--title'>
        <div>Vehicle Models</div>
        <div>Our rental fleet</div>
        <div>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</div>
      </div>
      <div className='modelData--container'>
      <div className='modelData--cars'>
          {cars.map((car, index) => <animated.div style={animations[index % animations.length]} key={car}>{car}</animated.div>)}
        </div>

        <div className='modelData--image'>
          <animated.img style={imgAnimation} src="../../ssangyong-rexton.png" alt="" />
        </div>

        <animated.div style={imgAnimation} className='modelData--data'>
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
        </animated.div>
      </div>
    </div>
  );
}

export default ModelData;
