import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './information.css';

function Information() {
  const infoBodyRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if(entry.isIntersecting && !animationDone) {
          setIsInViewport(true);
          setAnimationDone(true);
        }
      },
      { threshold: 0.70 }
    );

    if (infoBodyRef.current) {
      observer.observe(infoBodyRef.current);
    }

    return () => observer.disconnect();
  }, [animationDone]);

  const boxProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    to: {
      opacity: isInViewport ? 1 : 0,
      transform: isInViewport ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)'
    },
    config: {duration: 1000},
  });

  return (
    <div ref={infoBodyRef} className='information--body'>
      <div className='information--container'>
        <div className='information--title'>
          <div>Plan your trip now</div>
          <div>Quick & easy car rental</div>
        </div>
        <div className='information--data'>
          <animated.div style={boxProps} className='information--smallBox'>
            <div><img src="../../information_img2.png" alt="" /></div>
            <div>Select Car</div>
            <div>We offers a big range of vehicles for all your driving needs.
               We have the perfect car to meet your needs.
            </div>
          </animated.div>
          <animated.div style={boxProps} className='information--smallBox'>
            <div><img src="../../information_img.png" alt="" /></div>
            <div>Contact Operator</div>
            <div>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</div>
          </animated.div>
          <animated.div style={boxProps} className='information--smallBox'>
            <div><img src="../../information_img3.png" alt="" /></div>
            <div>Let's Drive</div>
            <div>Whether you're hitting the open road, we've got you covered with our wide range of cars.</div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default Information;
