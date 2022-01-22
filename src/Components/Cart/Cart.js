import React from 'react';

const Cart = (props) => {
          console.log(props);
          const cart = props.cart;
          let totalPopulation = 0;
          for (let i = 0; i < cart.length; i++) {
                    let country = cart[i];
                    totalPopulation = totalPopulation + country.population;
          }
          return (
                    <div style={{ textAlign: 'center' }} >
                              <h3>This is cart : {cart.length}</h3>
                              <h3>Total Population : {totalPopulation}</h3>
                    </div>
          );
};

export default Cart;