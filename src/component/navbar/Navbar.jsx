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
          <Link to="/about">About</Link>
          <Link to="/vehicle">Vehicle Models</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/ourTeam">Out Team</Link>
          <Link to="/contactUs">Contact</Link>
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
