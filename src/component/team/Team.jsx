import { useInView } from 'react-intersection-observer';
import { animated, useSpring } from 'react-spring';
import './team.css';

function Team() {
  // Initialize the useInView hook for each member of the team.
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });
  const [ref5, inView5] = useInView({ triggerOnce: true });
  const [ref6, inView6] = useInView({ triggerOnce: true });

  // Define the animation to run when the team member comes into view.
  const animation1 = useSpring({ to: { opacity: 1, scale: inView1 ? 1 : 0.01 }, delay: 500 });
  const animation2 = useSpring({ to: { opacity: 1, scale: inView2 ? 1 : 0.01 }, delay: 500 });
  const animation3 = useSpring({ to: { opacity: 1, scale: inView3 ? 1 : 0.01 }, delay: 500 });
  const animation4 = useSpring({ to: { opacity: 1, scale: inView4 ? 1 : 0.01 }, delay: 500 });
  const animation5 = useSpring({ to: { opacity: 1, scale: inView5 ? 1 : 0.01 }, delay: 500 });
  const animation6 = useSpring({ to: { opacity: 1, scale: inView6 ? 1 : 0.01 }, delay: 500 });

  return (
    <div className='team--body'>
      <div className='team--container'>
        <animated.div style={animation1}>
          <div className='team--box' ref={ref1}>
            <img src="../../random_person3.jpg" alt="" />
            <div>
              <div>Luke Miller</div>
              <div>Salesman</div>
            </div>
          </div>
        </animated.div>
        <animated.div style={animation2}>
          <div className='team--box' ref={ref2}>
            <img src="../../random_person1.jpg" alt="" />
            <div>
              <div>Michael Diaz</div>
              <div>Business Owner</div>
            </div>
          </div>
        </animated.div>
        <animated.div style={animation3}>
          <div className='team--box' ref={ref3}>
            <img src="../../random_person5.jpg" alt="" />
            <div>
              <div>Briana Ross</div>
              <div>Photographer</div>
            </div>
          </div>
        </animated.div>
        <animated.div style={animation4}>
          <div className='team--box' ref={ref4}>
            <img src="../../random_person4.jpg" alt="" />
            <div>
              <div>Lauren Rivera</div>
              <div>Car Detailist</div>
            </div>
          </div>
        </animated.div>
        <animated.div style={animation5}>
          <div className='team--box' ref={ref5}>
            <img src="../../random_person2.jpg" alt="" />
            <div>
              <div>Martin Rizz</div>
              <div>Mechanic</div>
            </div>
          </div>
        </animated.div>
        <animated.div style={animation6}>
          <div className='team--box' ref={ref6}>
            <img src="../../random_person6.jpg" alt="" />
            <div>
              <div>Caitlyn Hunt</div>
              <div>Menager</div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Team;
