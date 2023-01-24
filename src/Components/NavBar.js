import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./main.css"

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return(
        <div>{!navOpen ?
            
            <span className='closedNavBtn' onClick={() => setNavOpen(true)}>
                <span className="material-symbols-outlined">
                menu
                </span>
            </span>
   
            :
            <ul className='nav'>
                <li className='links exitNav' onClick={() => setNavOpen(false)}>&times;</li>
                <li >
                <Link to="/" className='links' onClick={() => setNavOpen(false)}>Home</Link>
                </li>
                <li className='links'>
                <Link to="/Addition" className='links' onClick={() => setNavOpen(false)}>Addition</Link>
                </li>
                <li className='links'>
                <Link to="/Subtraction" className='links' onClick={() => setNavOpen(false)}>Subtraction</Link>
                </li >
                <li className='links'>
                <Link to="/Multiplication" className='links' onClick={() => setNavOpen(false)}>Multiplication</Link>
                </li>
                <li className='links'>
                <Link to="/MixedMath" className='links' onClick={() => setNavOpen(false)}>Mixed Questions</Link>
                </li>
            </ul>
            }
        </div>
    )
}

export default NavBar;