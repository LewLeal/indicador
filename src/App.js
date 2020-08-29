import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Detalle from './Components/Detalles';

useEffect(() => {
  fetch('https://aves.ninjas.cl/api/birds') 
  .then ((resp) => resp.json())
  .then ((datos) => {
    console.log(datos)
  })
}, [])

function App() {
  return (
    <>
    <Navbar/>
    <Card/>
    <Detalle/>
   
     
    </>
  );
}

export default App;
