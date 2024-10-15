import "./style.css";

function Navbar() {
    return (
        <div className="navbar">
            <span>
                {/* Arrume a importação da imagem para poder adicionar aqui */}
                {/* <img src={logo} alt="logo-sextou-recife.png" /> */}
            </span>
            <nav>
                <a href="">Mapa</a>
                <a href="">Eventos</a>
                <a href="">Parceiros</a>
                <a href="">Contato</a>
            </nav>
        </div>
    );
}

export default Navbar;
