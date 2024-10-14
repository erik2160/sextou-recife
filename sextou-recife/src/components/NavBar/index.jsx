// Esse import pode ser removido
// import React from 'react';

// Essa imagem não está sendo localizada, a pasta não existe e o arquivo também não
// import logo from '../NavBar/img/logo-sextou-recife.png';

import "./navbar.css";
{/*import Logo from './public/sextou-recife-logo.svg'*/}

function Navbar() {
    return (
        // Anteriromente aqui, você estava chamando <Navbar> ou seja, chamando o próprio componente dentro do componente
        // o correto é usar uma div e não chamar o proprio componente
        <div className="styles-navbar">
            <span>
                {/* Arrume a importação da imagem para poder adicionar aqui */}
                <img src="/public/Sextou-logo.png" alt="Logo" href="#"/>
            </span>
            <nav>
                <a href="">Mapa</a>
                <a href="">Eventos</a>
                <a href="">Parceiros</a>
            </nav>
            <button>Contato</button>
        </div>
    );
}

export default Navbar;
// antes estava: export default NavBar
// O nome do export estava diferente da function
