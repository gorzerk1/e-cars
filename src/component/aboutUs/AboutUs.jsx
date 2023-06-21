import './aboutUs.css';

function AboutUs() {

  return (
    <div className='aboutUs--body' >
      <div className='aboutUs--background'>
        <img className='aboutUs--backgroundImg' src="../../threeCars.png" alt="" />
      </div>
      <div className='aboutUs--container'>
        <div className='aboutUs--rightBox'>
          <div>Why Choose Us</div>
          <div>Best valued deals you will ever find</div>
          <div>Discover the best deals you'll ever find with our unbeatable offers.
               We're dedicated to providing you with the best value for your money,
               so you can enjoy top-quality services and products without breaking the bank.
               Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</div>
          <button>Find Details</button>
        </div>
        
        <div className='aboutUs--leftBox'>
          <div>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>Cross Country Drive</div>
              <div>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</div>
            </div>
          </div>
          <div>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>All Inclusive Pricing</div>
              <div>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</div>
            </div>
          </div>
          <div>
            <img src="../../aboutUs_image1.png" alt="" />
            <div className='aboutUs--smallBox'>
              <div>No Hidden Charges</div>
              <div>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutUs;
