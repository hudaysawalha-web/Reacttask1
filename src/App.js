import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); 
  const [showProduct, setShowProduct] = useState(false);
 
  const increaseCounter = () => {
    setCounter(counter + 1); 
  };

 const ShowProductDetails=()=> {
  setShowProduct(!showProduct);
 }

 const productDetails = showProduct ? (
  <div>
    <h2>Product Details</h2>
    <p><strong>Name:</strong> iPhone 14</p>
    <p><strong>Price:</strong> $1200</p>
    <p><strong>Description:</strong> A premium smartphone with advanced features.</p>
  </div>
) : null;
 

  return (
    <div className="app-container">
      <h1 className="counter">Counter: {counter}</h1>
      <button className="button" onClick={increaseCounter}>
        Increase
      </button>
      <button className="button" onClick={ShowProductDetails}>
        Show Product
      </button>
      {productDetails}
    </div>
  );
}

export default App;