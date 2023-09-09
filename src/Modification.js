import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Modification() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nom: '',
    // Ajoutez d'autres champs si nécessaire
  });

  useEffect(() => {
    axios.get(`http://localhost:8000/api/modifier/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleUpdate = () => {
    axios.put(`http://localhost:8000/api/data2/${id}`, {nom:formData})
      .then(response => {
        console.log(response.data);
        // Redirigez l'utilisateur vers la page d'affichage après la mise à jour
        // Vous devrez peut-être implémenter cette partie avec react-router-dom
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      <h1>Modifier les données</h1>
      <form>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            required
          />
        </div>
        {/* Ajoutez d'autres champs ici si nécessaire */}
        <button type="button" onClick={handleUpdate}>Mettre à jour</button>
      </form>
    </div>
  );
}

export default Modification;
