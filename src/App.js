import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery'; import 'popper.js'; import 'bootstrap';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Detalles from './Components/Detalles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
      <h3 className="display-4 text-danger p-2 mx-auto">Birds</h3>
      <div className="row">
        {birds.map((info, index) => (<Card
          uid={info.uid}
          image={info.images.main}
          description={info.name.spanish}
          index={info.sort} />

        ))}
      </div>

    </>
  );
}

export default App;