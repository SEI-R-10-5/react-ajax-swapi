import React from 'react'

const starshipPage = (props) => {
    
        let starship = props.location.state
        console.log(starship)
        
        return ( starship ? (
            <div>
                <h1>
                {starship.name}
                </h1>
                <h3>
                {starship.model}
                </h3>
                <h3>
                {starship.starship_class}
                </h3>
            </div>
        ) : (
            <h1>...loading</h1>
        )
        )
        

}

export default starshipPage