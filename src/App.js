import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';
import React, { useState } from 'react';
import {
  Routes,
  Route,
  Link,
  BrowserRouter as Router
} from "react-router-dom";



function App() {
  const [mode, setMode]= useState('light');

  const toggleMode=()=>
  {
    if(mode==='light'){
     setMode('dark')
     document.body.style.backgroundColor= "black";
     document.body.style.color= "white";
     document.title="Light Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor= "white"
      document.body.style.color= "black"
    }
  }
  


  return (
    <>

    

    
    <Navbar title ="Home" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <div>
      <Routes>
        <Route exact path="/" element={<Textform heading="Text Area"/>}>
      
        </Route>
        <Route exact path="/about" element={<About/>}>
        </Route>
        </Routes>
      
      </div>
    

    </>
  );
}

export default App;
