import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Student from './Components/Student';



function App() {
  return (
  <div>
   
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    
  </div>
  );
}

export default App;