import React from 'react';
import "./main.css";
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
        <div className='homePage'>
            <div className='contentContainer'>
                <h1 className='homeTitle'>Mathy Math!</h1>
                <span>Choose your fighter: </span>
                <div className='selections'>
                    <button className='selectionBtn'><Link className="btnLink" to="/Addition">Addition</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/Subtraction">Subtraction</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/MixedMath">Mix it up!</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;