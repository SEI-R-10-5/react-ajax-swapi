import React from 'react'


const Home = () => {
    

    <div>{props.starships.map(starship=> {
        let location= {
            pathname: './starship',
            state: starship
        }
        
    })}
    </div>

return (
    <Link 
    to={location}
    key={starship.name}
    
    >
            {starship.name}
        </Link>
    
    )
}


// props.starships.length ? (
//     //all the starship rendering stuff
// ) : (
//     <h4>loading...</h4>
// )