import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Hero from './components/hero'
import ProductSlider from './components/productSlider.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <ProductSlider />
    </div>
  );
}

export default App;
