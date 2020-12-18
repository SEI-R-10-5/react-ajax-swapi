import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Pilots = (props) => {
    const [allPilots, setPilots] = useState([])

    useEffect(async () => {
        const pilots = await Promise.all(props.pilots.map(async (pilot) => {
            const res = await Axios.get(pilot)
            return res.data.name
        }))
        setPilots(pilots)
    }, [])

    return (
        <div >
            <p>Pilots:</p>
            <ul>
                {allPilots.map((pilot) => (
                    <li key={pilot}>{pilot}</li>
                ))}
            </ul>
        </div>
    )

}

export default Pilots