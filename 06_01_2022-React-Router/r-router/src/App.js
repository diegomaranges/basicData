import React from 'react';
import {BrowserRouter as BR, Route} from 'react-router-dom';
import Movies from './components/Movies/Movies';
import Nav from './components/NavBar/NavBar';
import { home, movies } from './components/Utils/Utils';

function App() {
    return (
        <div className="App">
            <BR>
                <Nav></Nav>
                <Route path={home}>
                    <h1>Descripcion de la pagina</h1>
                </Route>
                <Route path={movies}>
                    <h2>Las peliculas</h2>
                    <Movies></Movies>
                </Route>
            </BR>
        </div>
    );
}

export default App;
