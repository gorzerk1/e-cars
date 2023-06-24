import './App.css';
import {Route, Routes} from "react-router-dom"
import FullSite from './container/FullSite.js'
import AboutPath from './container/AboutPath.js'
import Vehicle from './container/Vehicle.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FullSite/>}/>
        <Route path="/about" element={<AboutPath/>}/>
        <Route path="/vehicle" element={<Vehicle/>}/>
      </Routes>
    </div>
  );
}

export default App;
