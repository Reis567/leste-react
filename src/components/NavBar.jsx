import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className='navbar'>
        
        <input type="checkbox" id='check'/>
            <Link to={'/'}>
                <img src="https://static.wixstatic.com/media/1f0d31_6973563a5a4a44a3b87e02b5e42b7bd3~mv2.png/v1/fill/w_136,h_48,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1f0d31_6973563a5a4a44a3b87e02b5e42b7bd3~mv2.png" alt="" />
            </Link>
        <div className='navlist'>
            <h3>
                <Link to={'/'} className='linkheader'>
                    Home
                </Link>
            </h3>
            <h3>
                <Link to={'/new'} className='linkheader'>
                    Novo contato
                </Link>
            </h3>
        </div>
        <label htmlFor="check" className='check-btn'>
        <FontAwesomeIcon icon={faBars} />
        </label>
    </nav>
  )
}

export default NavBar
