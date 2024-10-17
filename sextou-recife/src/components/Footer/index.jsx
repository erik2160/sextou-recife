import "./style.css";
import Sextou from "../../assets/sextou-recife3.png";
import Instagram from "../../assets/instagram.png";
import Tiktok from "../../assets/tiktok.png";

function Footer() {
    return (
        <div className="panela">
            <div className="rodape">
                <div className="p1">
                    <p>Siga-nos nas redes</p>

                    <div className="icones">
                        <a href="#" target="_blank">
                            <img src={Instagram} alt="Insta" />
                        </a>
                        <a href="#" target="_blank">
                            <img src={Tiktok} alt="Tiktok" />
                        </a>
                    </div>
                </div>

                <p>
                    <a href="#" target="_blank">
                        Início
                    </a>{" "}
                    |{" "}
                    <a href="#" target="_blank">
                        Revitalizando o Coração Cultural de Recife
                    </a>{" "}
                    |{" "}
                    <a href="#" target="_blank">
                        Encontre o Local Ideal
                    </a>{" "}
                    |{" "}
                    <a href="#" target="_blank">
                        Eventos Futuros
                    </a>{" "}
                    |{" "}
                    <a href="#" target="_blank">
                        Nossos Parceiros
                    </a>
                </p>
                <div>
                    <p>© 2024 Sextou Recife. Todos os direitos reservados.</p>

                    <p>
                        <a href="#" target="_blank">
                            Política de Privacidade
                        </a>{" "}
                        |{" "}
                        <a href="#" target="_blank">
                            Termos de Serviço
                        </a>
                    </p>
                </div>
            </div>
            <img src={Sextou} alt="Sextou Recife" className="logo" />
        </div>
    );
}

export default Footer;
