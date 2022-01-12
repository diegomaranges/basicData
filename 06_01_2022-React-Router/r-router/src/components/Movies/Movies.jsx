import React from 'react';
import Movie from './Movie/Movie';
import {useState, useEffect} from "react";
import './movies.css'

function Movies() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
    }, [count]);

    function pluss() {
        setCount((count) => count + 1);
    }

    return (
        <div className='cFlex'>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <Movie></Movie>
            <button onClick={() => pluss()}>+ count</button>
        </div>
    );
}

export default Movies;
