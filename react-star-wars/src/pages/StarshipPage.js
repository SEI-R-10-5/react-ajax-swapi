import React from 'react'

const StarshipPage = (props) => {
    console.log(`FRONTEND: StarshipPage: props.state.name`, props.location.state)
    return (
        <div>
            {props.location.state.name}
            
        </div>
    )
}

export default StarshipPage