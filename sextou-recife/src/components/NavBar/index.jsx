import "./style.css";

function Navbar() {
    return (
        <div className="styles-navbar">
            <span>
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
