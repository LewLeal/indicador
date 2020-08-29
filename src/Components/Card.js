import React from 'react';

const Card = ({uid}) => {
    return (
        <div className="row">
        <div className=" col-3 card" >
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{uid}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a to="#" className="btn btn-primary">Go somewhere</a>
                </div>
                
        </div>
        </div>
    );
}
 
export default Card;