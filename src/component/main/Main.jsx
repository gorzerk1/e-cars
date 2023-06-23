import {useSpring, animated} from 'react-spring';
import './main.css';

function Main() {

  const infoProps = useSpring({
    from: {opacity: 0, transform: 'translate3d(0,50px,0)'},
    to: {opacity: 1, transform: 'translate3d(0,0px,0)'},
    delay: 500,
    config: {duration: 1000},
  });

  const carProps = useSpring({
    from: {opacity: 0, transform: 'translate3d(100px,0,0)'},
    to: {opacity: 1, transform: 'translate3d(0,0px,0)'},
    delay: 550,
    config: {duration: 1000},
  });

  return (
    <div className="main--body" >
      <img src="../../background_town.png" alt="" />
      <div className='main--container'>
        <animated.div style={infoProps} className='main--info'>
          <div>Plan your trip now</div>
          <div>Save <span>big</span> with our car rental</div>
          <div>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</div>
          <div className='main--buttons'>
            <button>Book Ride</button>
            <button>Learn More</button>
          </div>
        </animated.div>
        <animated.div style={carProps} className='main--car'>
          <img src="../../main_car.png" alt="" />
        </animated.div>
      </div>
    </div>
  )
}

export default Main;
