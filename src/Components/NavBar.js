import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <ul className='nav'>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Addition">Addition Fun</Link>
                </li>
                <li>
                <Link to="/Subtraction">Subtraction Fun</Link>
                </li>
                <li>
                <Link to="/MixedMath">Mixed Questions</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;