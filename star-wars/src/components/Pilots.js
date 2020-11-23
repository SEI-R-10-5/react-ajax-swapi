import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Pilots = (props) => {
    const [allPilots, setPilots] = useState([])
    let thePilots = []

    useEffect(() => {
        props.pilots.forEach(async (pilot) => {
            const res = await Axios.get(pilot)
            thePilots.push(res.data.name)
            setPilots(thePilots)
        })
    }, [])

    return (
        <div className='card'>
            <p>Pilots:</p>
            <ul>
                {allPilots.map((pilot, i) => (
                    <li key={i}>{pilot}</li>
                ))}
            </ul>
        </div>
    )
}

export default Pilots