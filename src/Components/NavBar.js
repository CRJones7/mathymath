import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "./main.css"

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return(
        <div>{!navOpen ?
            <span className='openNav' onClick={() => setNavOpen(true)}>Menu</span>
            :
            <ul className='nav'>
                <li className='links exitNav' onClick={() => setNavOpen(false)}>&times;</li>
                <li >
                <Link to="/" className='links'>Home</Link>
                </li>
                <li className='links'>
                <Link to="/Addition" className='links'>Addition</Link>
                </li>
                <li className='links'>
                <Link to="/Subtraction" className='links'>Subtraction</Link>
                </li >
                <li className='links'>
                <Link to="/MixedMath" className='links'>Mixed Questions</Link>
                </li>
            </ul>
            }
        </div>
    )
}

export default NavBar;