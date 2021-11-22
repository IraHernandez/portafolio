import React from 'react';
import Hero from './components/Hero'
import Header from './Header';
import Proyectos from './components/Proyectos';
import "./index.css"


function App() {
  return (
    <>
    <Header/>
    
    <Hero/>
       <div className="row">
        <Proyectos />
      </div>
    </>
  );
}

export default App;
