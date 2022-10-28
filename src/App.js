import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Hero from './components/hero'
import ProductSlider from './components/productSlider.js';
import data from './components/data';

function App() {

  const cards = data.map( (item)=>{
    return(
      <ProductSlider 
      key={item.id}
      item={item}
      />
      
    )
  })

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="card-main">
        {cards}
        
      </section>
      

    </div>
    
  );
}

export default App;
