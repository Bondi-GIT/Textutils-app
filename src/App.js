import React, {useState} from 'react'
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {

  const [container, setCotainer] = useState({
    padding:"0px",
    maxWidth: '100%',
    maxHeight: '98vh',
});

  return (
   <>
      <div className="container" style={container}>
        <Router>
          <Navbar titleName="Textutils project"/>
          <Routes>
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/textform"  element={<Textform/>} />           
          </Routes>
        </Router>
      </div>
   </>
  );
}

export default App;
