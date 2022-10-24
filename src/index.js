import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const root = document.getElementById('root');

function Home(){
  return(
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Home />,root);


