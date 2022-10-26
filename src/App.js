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
      img ={item.coverImg}
      rating={item.stats.rating}
      reviewCount = {item.stats.reviewCount}
      country = {item.location}
      title="Life lessons with Katie Zaferes"
      price= {item.price}
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
