import {useSpring, animated} from 'react-spring';
import {useEffect, useRef, useState} from 'react';
import './review.css';

function Review() {
  const [isIntersecting, setIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  const animation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,50px,0)' },
    to: {
      opacity: hasAnimated ? 1 : (isIntersecting ? 1 : 0), 
      transform: hasAnimated ? 'translate3d(0,0px,0)' : (isIntersecting ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)')
    },
    delay: 0,
    config: { duration: 1000 },
    onRest: () => setHasAnimated(true),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        rootMargin: '-40% 0px',
      }
    );
    let currentRef = null;
    if (ref.current) {
      observer.observe(ref.current);
      currentRef = ref.current;
    }
    return () => {
      if(currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <div className='review--body' ref={ref}>
      <div className='review--title'>
        <div>Reviewed by People</div>
        <div>Client's Testimonials</div>
        <div>Discover the positive impact we've made on the our clients by reading through their testimonials.
             Our clients have experienced our service and results,
             and they're eager to share their positive experiences with you.
        </div>
      </div>
      <div className='review--container'>
        <animated.div style={animation} className='review--whiteBackground'>
          <div className='review--leftBox'>
            <div>
              "We rented a car from this website and had an amazing experience!
               The booking was easy and the rental rates were very affordable. "
            </div>
            <div className='review--card'>
              <img src="../../Artour.jpg" alt="" />
              <div >
                <div>Andreas Franck</div>
                <div>Merkaz</div>
              </div>
              <img src="../../break.png" alt="" />
            </div>
          </div>
        </animated.div>
        <animated.div style={animation} className='review--whiteBackground'>
          <div className='review--rightBox'>
            <div>
              "The car was in great condition and made our trip even better.
               Highly recommend for this car rental website!"
            </div>
            <div className='review--card'>
              <img src="../../andreas.jpg" alt="" />
              <div>
                <div>Artour Babaev</div>
                <div>Merkaz</div>
              </div>
              <img src="../../break.png" alt="" />
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Review;