import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Country loaded : {countries.length}</h1>
      <h4 style={{ textAlign: 'center' }}>Country added : {cart.length}</h4>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country hac={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
      }
    </div>
  );
}

export default App;
