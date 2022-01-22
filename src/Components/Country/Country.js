import React from 'react';

const Country = (props) => {
          const { name, population, region, flag } = props.country;
          const hac = props.hac;
          return (
                    <div style={{ padding: '20px', border: 'red 5px solid', margin: '30px' }}>
                              <h3 style={{ textAlign: 'center' }}>{name}</h3>
                              <img style={{ height: '65px', width: '120px', marginLeft: '570px' }} src={flag} />
                              <p style={{ textAlign: 'center' }}>Population : {population}</p>
                              <p style={{ textAlign: 'center' }}>Region : {region}</p>
                              <button style={{ marginLeft: '570px' }} onClick={() => hac(props.country)}>Add Country</button>
                    </div>
          );
};

export default Country;