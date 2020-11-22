import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {

    const [links, setLinks] = useState()

    useEffect(() => {
        getList()
    }, [])

    const getList = () => {
        if (props.starships){ 
            setLinks(props.starships.map(starship => {
                let location = {
                    pathname: `/starship/${starship.model.replace(/ /g, "")}`,
                    state: starship
                }
                return (
                    <div style={{}}>
                        <Link
                            to={location}
                            key={starship.name}
                            style={{
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            {starship.name}
                        </Link>
                    </div>
                )
            }))   
        }
    }

    

    return (
        <div 
            style={{
                display: 'grid', 
                gridTemplateColumns: '25vw 25vw 25vw 25vw',
                gridTemplateRows: '200px 200px 200px',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {links ? links : <p> Loading... </p>}
        </div>
    )
}

export default Home;