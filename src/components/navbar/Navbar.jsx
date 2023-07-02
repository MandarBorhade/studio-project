import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './navbar.css';

const Navbar = () => {

    const [isActive , setIsActive ] = useState(false)

    const handleNavClick = (e) => {
        setIsActive(true)
        e.currentTarget.classList.toggle('active');
    }


    return (
        <div className='nav-wrapper'>
             <div className="nav-bar">
                <NavLink className='nav' activeClassName = 'active' onClick={handleNavClick} to='/'>Home</NavLink>
                <NavLink className='nav' activeClassName = 'active' onClick={handleNavClick} to='/about'>About</NavLink>
                <NavLink className='nav' activeClassName = 'active' onClick={handleNavClick} to='/contact'>Contact</NavLink> 
            </div>
            

        </div>
    )
}

export default Navbar;