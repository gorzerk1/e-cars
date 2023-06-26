import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from 'react-intersection-observer';
import './aboutCompany.css';

function AboutCompany() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1.0
  });

  const springs1 = useSpring({
    from: { transform: inView ? "translateY(50px)" : "translateY(0px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 0,
    config: config.molasses
  });

  const springs2 = useSpring({
    from: { transform: inView ? "translateY(50px)" : "translateY(0px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 500,
    config: config.molasses
  });

  const springs3 = useSpring({
    from: { transform: inView ? "translateY(50px)" : "translateY(0px)", opacity: 0 },
    to: { transform: "translateY(0px)", opacity: 1 },
    delay: 1000,
    config: config.molasses
  });

  return (
    <div className='aboutCompany--body'>
      <img src="../../sale_car.jpg" />
      <div className='aboutCompany--container' ref={ref}>
        <div className='aboutCompany--box'>
          <animated.div style={springs1}>About Company</animated.div>
          <animated.div style={springs2}>
            Since our inception, journeying has been more than a business at Accelerate Auto Rentals — it's our passion. We are not simply a company that lends out vehicles; we are the conduit through which individuals, families, and professionals ignite their dreams of travel, exploration, and discovery.
          </animated.div>
          <animated.div className='aboutCompany--bottomBox' style={springs3}>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon2.png" alt="" />
              <div>
                <div>20+</div>
                <div>Product amount</div>
              </div>
            </div>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon3.png" alt="" />
              <div>
                <div>15+</div>
                <div>Rental outlets</div>
              </div>
            </div>
            <div className='aboutCompany--Boxes'>
              <img src="../../car_icon4.png" alt="" />
              <div>
                <div>10+</div>
                <div>Repair shop</div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
