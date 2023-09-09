import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Delete from './Delete';
import { Link, NavLink, Route } from 'react-router-dom';

function Affichage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Données</h1>
      <ul>
        {data.map(item => (

          <li key={item.id}>{item.nom} <Delete id={item.id}/> 
          <button class="button is-info "><Link to={`/modif/${item.id}`} class="has-text-white">Modifier</Link></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Affichage;
