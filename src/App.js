import React from 'react';
import DatosPersonales from './Component/DatosPersonales';
import ExperienciaLaboral from './Component/ExperienciaLaboral.js';
import Educacion from './Component/Educacion.js';
import foto from './assets/img/foto.PNG';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="profile-picture">
        <img src={foto} alt="Foto de perfil hv" className="profile-image" />
      </div>
      <h1>Mi Hoja de Vida</h1>
      <DatosPersonales />
      <ExperienciaLaboral />
      <Educacion />
    </div>
  );
}

export default App;

