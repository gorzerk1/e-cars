
import './navbar.css';

function Navbar() {

  return (
    <div className='navbar--body' >
      <div className='navbar--container'>
        <div className='navbar--logo'>
          <img src="../../logo.png" alt="" />
          <div>
            <div>CAR</div>
            <div>Rental</div>
          </div>
        </div>
        <div className='navbar--middleBox'>
          <div>Home</div>
          <div>About</div>
          <div>Vehicle Models</div>
          <div>Testimonials</div>
          <div>Out Team</div>
          <div>Contact</div>
        </div>
        <div className='navbar--rightBox'>
          <div>Sign In</div>
          <button>Register</button>
        </div>
        <div className='navbar--menu'>
          <div><img src="../../menu.png" alt="" /></div>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
