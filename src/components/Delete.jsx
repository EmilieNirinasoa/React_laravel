import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete({id}) {

  const [data, setData] = useState([]);

  const handleDelete = (id) => {
   
    
    axios.delete(`http://localhost:8000/api/data/${id}`)
      .then(response => {
        console.log(response.data);
        // Mettez à jour les données après la suppression
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  // ... le reste de votre code pour récupérer les données

  return (
    <div>
        
       <button onClick={() => handleDelete(id)}>Supprimer</button>
     </div>
  );
}

export default Delete;
