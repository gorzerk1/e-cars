
import './review.css';

function Review() {

  return (
    <div className='review--body' >
      <div className='review--title'>
        <div>Reviewed by People</div>
        <div>Client's Testimonials</div>
        <div>Discover the positive impact we've made on the our clients by reading through their testimonials.
             Our clients have experienced our service and results,
             and they're eager to share their positive experiences with you.
        </div>
      </div>
      <div className='review--container'>
      <div className='review--whiteBackground'>
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
      </div>
        <div className='review--whiteBackground'>
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
        </div>
      </div>
    </div>
  );
}


export default Review;
