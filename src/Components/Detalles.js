import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Detalles = (props) => {

    let { uid } = useParams();
    let apidetail = 'https://aves.ninjas.cl/api/birds/';

    const [birdsdetail, setBirdsdetail] = useState(null)

    useEffect(() => {
        fetch(apidetail + uid)
            .then((resp) => resp.json())
            .then(datos =>
                setBirdsdetail(datos))
    }, [])
    console.log(birdsdetail);
    console.log(apidetail + uid);

    return (
        <div className="card mb-3">
            <img src={props.image} className="card-img-top" />
            {
                birdsdetail == null ? (
                    <h3></h3>
                ): (
                    <div className = "card-body">
                        <h3 className = "card-title">{birdsdetail.uid}</h3>
                        <h4 className="card-title">{birdsdetail.name.spanish}</h4>
                        <h5 className="card-title">Categoria:</h5>
                            <p className="card-text"></p>
                        <h5 className="card-title">Habitat:</h5>
                            <p className="card-text">{birdsdetail.habitat}</p>
                        <h5 className="card-title">¿Sabias que?</h5>
                            <p className="card-text">{birdsdetail.didyouknow}</p>
                    </div >
                )
            }
            
        </div >
       
    );
}

export default Detalles;