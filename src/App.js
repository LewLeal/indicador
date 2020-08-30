import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Detalle from './Components/Detalles';



function App() {
  const [birds, setBirds] = useState()
  useEffect(() => {
    fetch('https://aves.ninjas.cl/api/birds')
      .then((resp) => resp.json())
      .then((datos) => {
        setBirds (datos);
        console.log(birds)
      })
  },)
  return (
    <>
      <Navbar />
      <Card />
      <Detalle />


    </>
  );
}

export default App;
