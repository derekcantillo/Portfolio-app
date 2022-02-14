import React from 'react';
import {Link} from 'react-scroll'
import logo from '../images/logo2.png'
const Header =()=>{
    return(
        <div>
            <nav>
                <Link to='profile' className='logo'>
                 <img src={logo} alt='logo'></img>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='profile' className='active'> Profile</Link></li>
                    <li><Link to='aboutme'> Sobre mí</Link></li>
                    <li><Link to='projects'> Proyectos</Link></li>
                    <li><Link to='estudies'> Estudios</Link></li>
                    <li><Link to='contactme'> Contáctame</Link></li>
                </ul>
                <Link to='#'>Dark/Light Mode</Link>
            </nav>
        </div>
    )
}

export default Header;