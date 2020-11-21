import React, { useEffect, useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Starship from '../pages/Starship'
import {__GetStarships} from '../service/StarshipServices'

const Router =()=>{

    const [starships,setStarships]= useState([])


    const getStarships=async()=>{
        try {
            const star = await __GetStarships()
            console.log(star)
            setStarships(star.results)
        } catch (error) {
            throw error
        }
    }

    useEffect(()=>{
        getStarships()
    },[])

    return(
        <div>
            <Switch>
                <Route
                    exact path='/'
                    component={()=>(
                        <Home starships={starships}/>
                    )}
                />
                <Route
                    path='/starship'
                    render={(props)=>(<Starship location={props.location}/>)}
                />
            </Switch>
        </div>
    )
}

export default Router