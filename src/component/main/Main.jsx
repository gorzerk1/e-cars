import './main.css';

function Main() {
  return (
    <div className="main--body" >
      <img src="../../background_town.png" alt="" />
      <div className='main--container'>
        <div className='main--info'>
          <div>Plan your trip now</div>
          <div>Save <span>big</span> with our car rental</div>
          <div>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</div>
          <div className='main--buttons'>
          <button>Book Ride</button>
          <button>Learn More</button>
          </div>
        </div>
        <div className='main--car'>
          <img src="../../main_car.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main;
