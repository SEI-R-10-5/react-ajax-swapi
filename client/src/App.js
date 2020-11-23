// See notes on App.js in React-Router context, <Switch> and <Route> below 

import React, { Component, useState, useEffect } from 'react'
import {Route, Switch} from 'react-router-dom'
import './styles/App.css';
import Home from './pages/Home'
import StarshipPage from './pages/StarshipPage.js'


// let appStyles = {
//   video: {
//     width: "500px",
//     "zIndex": "100"
//   }
// }


function App(props) {
  return (
    <div className="app">
      {/* <NavigationPanel className="navigationPanel" routePaths={this.state.routePaths}/> */}


      
      <Switch>
        <Route {...props} exact path={"/"} component={Home} />
        <Route {...props} path={'/starships'} component={StarshipPage} />
      </Switch>
    </div>
  )
}

export default App


// Option 2: functional-component version 
// note: using the function version prevents paths being passed as props from state,
// so remove pathRoutes from state and hard code them into each route and nav link



// export default App




//                          Purpose and Hierarchy Position of App.js

// App.js is the 2nd highest javascript file in the tree hierarchy. Use it to set the routes and paths for 
// your application and connect them to their respective page components. App.js should be imported to 
// index.js for configuration and rendering.


//                          Notes on <Switch> and <Route> components

// These are components built in to React-Router to facilitate "multi-page" navigation. Switch components
// prevent the performance-hindering effects of rendering all routes simultaneously. Route components are used
// to connect the various pages of the application to a path. These paths are used to facilitate user navigation
// between the pages. Each Route component requires a path and component prop to function.
