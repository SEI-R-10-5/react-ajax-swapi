import StarshipPage  from './StarshipPage';
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

const Home = (props) => {
    console.log(props.starships)
    return (
        
            <div className="main-container">
                
                <div className="header-container">
                    <h1>Harry Potter: Space Edition: Air-Crafts</h1>
                </div>
                <div className='link-container'>
                    {props.starships.map(starship => {
                        let location = {
                        pathname: `/starship/${starship.name}`, 
                        state: starship
                        }
                        return (
                      
                                <div className="link">
                                    <Link to={location} key={starship.name}>
                                       <p className='starship-name'>
                                            {starship.name}
                                       </p>
                                    </Link>
                                </div>
                       
                        )
                    })}
                </div>           
            </div>
            
        
      )
    }
    

    
    export default Home
