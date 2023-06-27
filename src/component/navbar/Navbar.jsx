import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

  return (
    <div className='navbar--body' >
      <div className='navbar--container'>
        <Link to="/" className='navbar--logo'>
          <img src="../../logo.png" alt="" />
          <div className='navbar--text'>
            <div>CAR</div>
            <div>Rental</div>
          </div>
        </Link>
        <div className='navbar--middleBox'>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Vehicle">Vehicle Models</Link>
          <Link to="/Testimonials">Testimonials</Link>
          <Link to="/Team">Out Team</Link>
          <Link to="/Contact">Contact</Link>
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
