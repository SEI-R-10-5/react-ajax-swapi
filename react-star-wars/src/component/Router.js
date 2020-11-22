import React, { useState, useEffect } from 'react';
import Home from './Home'
import StarshipPage from './StarshipPage'
import { Route, Switch } from 'react-router-dom'  //navlink? NO only if you have nav
import Axios from 'axios'


const Router = () => {

  const [starship, setStarship] = useState([])

  const GetShips = async () => { //created function to call api
    try{
    const data = await Axios.get('https://swapi.dev/api/starships')
    setStarship(data.data.results)  // by doing it to results we get the array of ships then in the route Home we do a map on them - this to display each of them
    console.log('data', data)
    console.log('data api name', data.data)
    console.log('results', data.data.results)
    console.log('results name', data.data.results[0].name) //here we get the first name CR90 corvette
    }catch (error){
      throw error
    }
  }

  useEffect(() => { //invoking api call and render
    GetShips()
  }, [setStarship]);//observable would go between the [] - //do not ENTER starship, it will render infinte loop
  console.log("get ships")

  return (
    <div className="router">
      <main>
        <Switch>
          <Route
            exact path="/"
            component={() => (<Home starships={starship} />)} //rendering home component - this with the prop starship - to show starships from api call //made it into a anonemous function this so it can pass down data to home
          /> 
          <Route
            path="/starship"
            render={(props) => (<StarshipPage location={props.location} />)} //rendering starshipPage component - this so details of ship can be shown
          />
        </Switch>
      </main>
    </div>
  )
}


export default Router