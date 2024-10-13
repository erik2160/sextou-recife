import "./Footer.css";
import Sextou from "../../assets/sextou-recife.png";

function Footer() {
    return (
      <footer className="rodape">
        <p>Siga-nos nas redes</p>

        <p>Início | Revitalizando o Coração Cultural de Recife | Encontre o Local Ideal | Eventos Futuros | Nossos Parceiros</p>

        <p>© 2024 Sextou Recife. Todos os direitos reservados.</p>

        <p className="privacidade">Política de Privacidade | Termos de Serviço</p>
        <img src={Sextou} alt="Sextou Recife" />
      </footer>
    );
  }
  
  export default Footer;
  