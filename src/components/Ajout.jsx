import React, { useState } from 'react';
import axios from 'axios';

function Ajout() {
  const [formData, setFormData] = useState("");

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/data2', {nom: formData })
      .then(response => {
        console.log(response.data);
        // Réinitialiser le formulaire après l'ajout
        setFormData();
      })
      .catch(error => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <div>
      <h1>Ajouter des données</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="attribut">Attrbut</label>
      <input
  type="text" id='attribut'
  name="attribute"
  value={formData}
  onChange={handleChange} 
  required
/>


        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Ajout;
