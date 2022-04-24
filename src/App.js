import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";
import Footer from './components/Footer';
import './App.css';


function App() {
  
  return (
    <div>
      <Nav>
    
      </Nav>
      <main>
      <About></About>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <ContactForm></ContactForm>
      <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
