import React, { useContext, useEffect } from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom"
import FullSite from './container/FullSite.js'
import AboutPath from './container/AboutPath.js'
import Vehicle from './container/Vehicle.js'
import Testimonials from './container/Testimonials.js'
import OurTeam from './container/OurTeam.js'
import ContactUs from './container/ContactUs.js'
import { MyContext } from '../src/data/ThemeProvider.jsx'

function App() {
  const location = useLocation();
  const { setPath } = useContext(MyContext);

  useEffect(() => {
    setPath(location.pathname);
  }, [location, setPath]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullSite/>}/>
        <Route path="/About" element={<AboutPath/>}/>
        <Route path="/Vehicle" element={<Vehicle/>}/>
        <Route path="/Testimonials" element={<Testimonials/>}/>
        <Route path="/Team" element={<OurTeam/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
