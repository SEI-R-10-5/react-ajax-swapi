import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PilotList = (props) => {

   const [ pilots, setPilots ] = useState([])

   const getPilots = async () => {
      // const promises = urls.map(url => fetch(url).then(res => res.json()));
      const promises = props.pilots.map(url => axios.get( url ))
      const res = await Promise.all(promises);
      setPilots( res.map ( e => e.data.name) )
    }
    

   useEffect (() => {
      if ( props.pilots.length )
         getPilots()
   },[])

   return (
      <div className="pilotList">
      { pilots.length ? 
         pilots.map( pilot => (<div key={pilot}>{pilot}</div>) )           
         :
         props.pilots.length ? "Finding Pilots..." : "No pilots known"
      }
      </div>
   )
}

export default PilotList