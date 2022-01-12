import React from 'react';
import './movie.css'

class Movie extends React.Component {
    render() {
        return (
            <div className="card width">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Pelicula</h5>
                    <p className="card-text">Some quick example text to build on the card title and make
                        up the bulk of the card's content.</p>
                </div>
            </div>
        );
    }
}

export default Movie;