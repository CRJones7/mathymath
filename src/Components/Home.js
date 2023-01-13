import React from 'react';
import "./main.css";
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
        <div className='mainContainer'>
            <div className='contentContainer'>
                <h1 className='homeTitle'>Mathy Math!</h1>
                <p className='talk'>Hey little math dude 😉 <br/> lets practice some math problems.</p>
                <span>Choose a topic</span>
                <div className='selections'>
                    <button className='selectionBtn'><Link className="btnLink" to="/Addition">Addition</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/Subtraction">Subtraction</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/Subtraction">Multiplication</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/Subtraction">Division</Link></button>
                    <button className='selectionBtn'><Link className="btnLink" to="/MixedMath">Mix it up!</Link></button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;