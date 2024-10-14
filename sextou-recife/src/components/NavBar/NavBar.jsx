import React from 'react';
import logo from '../NavBar/img/logo-sextou-recife.png';

function Navbar() {
    return (
        
        <Navbar className='styles.header'>
            <span>
                <img src={logo} alt="logo-sextou-recife.png" />
            </span>
            <nav>
                <a href="">Mapa</a>
                <a href="">Eventos</a>
                <a href="">Parceiros</a>
                <a href="">Contato</a>

            </nav>
        </Navbar>
        
        
    )
}

export default NavBar;