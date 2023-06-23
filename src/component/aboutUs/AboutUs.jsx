import {useSpring, animated} from 'react-spring';
import {useInView} from 'react-intersection-observer';
import './aboutUs.css';

function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const rightBoxProps = useSpring({
    from: {opacity: 0, transform: 'translate3d(-100px,0,0)'},
    to: inView ? {opacity: 1, transform: 'translate3d(0,0,0)'} : {},
    config: {duration: 1000},
  });

  const leftBoxProps1 = useSpring({
    from: {opacity: 0, transform: 'translate3d(100px,0,0)'},
    to: inView ? {opacity: 1, transform: 'translate3d(0,0,0)'} : {},
    config: {duration: 1000},
  });

  const leftBoxProps2 = useSpring({
    from: {opacity: 0, transform: 'translate3d(100px,0,0)'},
    to: inView ? {opacity: 1, transform: 'translate3d(0,0,0)'} : {},
    delay: 1000,
    config: {duration: 1000},
  });

  const leftBoxProps3 = useSpring({
    from: {opacity: 0, transform: 'translate3d(100px,0,0)'},
    to: inView ? {opacity: 1, transform: 'translate3d(0,0,0)'} : {},
    delay: 2000,
    config: {duration: 1000},
  });

  return (
    <animated.div ref={ref} className='aboutUs--body' >
      <div className='aboutUs--background'>
        <img className='aboutUs--backgroundImg' src="../../threeCars.png" alt="" />
      </div>
      <div className='aboutUs--container'>
        <animated.div style={rightBoxProps} className='aboutUs--rightBox'>
          <div>Why Choose Us</div>
          <div>Best valued deals you will ever find</div>
          <div>Discover the best deals you'll ever find with our unbeatable offers.
               We're dedicated to providing you with the best value for your money,
               so you can enjoy top-quality services and products without breaking the bank.
               Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</div>
          <button>Find Details</button>
        </animated.div>
        
        <div className='aboutUs--leftBox'>
          <animated.div style={leftBoxProps1}>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>Cross Country Drive</div>
              <div>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</div>
            </div>
          </animated.div>
          <animated.div style={leftBoxProps2}>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </animated.div>
          <animated.div style={leftBoxProps3}>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>No Hidden Charges</div>
              <div>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</div>
            </div>
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
}

export default AboutUs;
