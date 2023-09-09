import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const ItemList = lazy(() => import('./components/Affichage'));
const Ajout = lazy(() => import('./components/Ajout'));
 
const Modif = lazy(() => import('./Modification'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Chargement...</div>}>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/Ajout" element={<Ajout />} />
        <Route path="/modif/:id" element={<Modif/>} />
       
      </Routes>
    </Suspense>
  </Router>
);

export default App;
