import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Detalle from './Components/Detalles';


function App() {

  const [birds, setBirds] = useState([])

  useEffect(() => {
    fetch('https://aves.ninjas.cl/api/birds')
      .then((resp) => resp.json())
      .then(datos =>
        setBirds(datos))
  }, [])

  console.log(birds[0])

  return (
    <>
      <Navbar />
      <br></br>
      <div className="row">
      {birds.map( info => (<Card 
      uid={info.uid} 
      image={info.images.main}
      description={info.name.spanish}/>

      ))}
      </div>
      <Detalle />
    </>
  );
}

export default App;
