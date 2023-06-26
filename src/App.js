import './App.css';
import {Route, Routes} from "react-router-dom"
import FullSite from './container/FullSite.js'
import AboutPath from './container/AboutPath.js'
import Vehicle from './container/Vehicle.js'
import Testimonials from './container/Testimonials.js'
import OurTeam from './container/OurTeam.js'
import ContactUs from './container/ContactUs.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullSite/>}/>
        <Route path="/about" element={<AboutPath/>}/>
        <Route path="/vehicle" element={<Vehicle/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/ourTeam" element={<OurTeam/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
