import StarshipPage from './StarshipPage';
import Home from './Home';

import React, { useEffect, useState } from 'react'
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import StarShip from './StarshipPage';



const Router = () => {
    const [starships, setShips] = useState([])
    // console.log(starships)
    
    
    
    useEffect(()=>{ 
        async function starship(){
           const ship = await axios.get('https://swapi.dev/api/starships')
           console.log(ship.data.results)
           setShips(ship.data.results)
       }
        starship()
    },[])

        return (
               
                    <Switch>
                        <Route exact path="/" component={() => (<Home starships={starships}></Home>)}/>
                        <Route path="/starship" render={(props) => <StarshipPage location={props.location} />}></Route>
                    </Switch>
              
        )
        

}
export default Router