import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar.component';
import Body from './components/Body.main.component';
import Footer from './components/Footer.component';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Body/>
     <Footer/>
    </div>
    
  );
}

export default App;
