import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
//import Contact from "./components/contact";

import './App.css';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
