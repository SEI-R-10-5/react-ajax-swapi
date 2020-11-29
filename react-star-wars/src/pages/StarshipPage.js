import React from 'react';

const StarshipPage = (props)=>{
    return(
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <h2  className="text-light m-auto">
                        STAR WARS STARSHIPS
                    </h2>
                </div>
            </nav>
            <div className="container">
                <div className="row mt-5">
                <div className="offset-md-4 col-md-4 col-sm-12 big-dark-green text-light">
                        <p>NAME: {props.location.state.name} </p>
                        <p>MODEL: {props.location.state.model} </p>
                        <a href="./" className="text-light">RETURN</a>
                    </div>  
                        
                </div>
                
            </div>
        </>
    );
}

export default StarshipPage;