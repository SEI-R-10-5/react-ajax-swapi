import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [starships, setStarships] = useState([])
    
    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships')
        .then (res => {
            setStarships(res.data.results)
        })
        .catch(console.log())
        },[])
    return (
        <>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
            <h2 className = "text-light m-auto">Star Wars Starships</h2>
            </div>
        </nav>
        <div className = "container">
        <div className = "row mt-5">
            {starships.map(starship => {
            let location = {
                pathname: '/starships',
                state: starship
            }
            return (
                <div className = "col-md-3 col-sm-12 mb-3"> 
                <Link
                  to={location}
                  key={starship.name}
                className = "btn-block big-dark-green text-center text-light" 
                >
                  {starship.name}
                </Link>
                </div>
            )
        })}
        </div>
        </div>
        </>
    )
}

export default Home;