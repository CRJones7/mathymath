import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return(
        <div>{!navOpen ?
            <span className='openNav' onClick={() => setNavOpen(true)}>O</span>
            :
            <ul className='nav'>
                <li className='links'>&times;</li>
                <li >
                <Link to="/" className='links'>Home</Link>
                </li>
                <li className='links'>
                <Link to="/Addition" className='links'>Addition Fun</Link>
                </li>
                <li className='links'>
                <Link to="/Subtraction" className='links'>Subtraction Fun</Link>
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