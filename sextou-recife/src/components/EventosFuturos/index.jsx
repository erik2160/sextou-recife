import "./style.css";

const Eventos = () => {
    return (
        <div className="eventos">
            <h2 className="titulo">Eventos Futuros</h2>
            <p className="descricao">
                Explore eventos com base em seus interesses, com filtros
                específicos você <br />
                pode encontrar a programação ideal de acordo com o que você
                quiser.
            </p>
            <div className="caixa-container">
                <div className="caixas">
                    <div className="caixa amarela"></div>
                    <div className="caixa vermelha"></div>
                    <div className="caixa laranja"></div>
                    <div className="caixa azul"></div>
                    <div className="caixa azul-claro"></div>
                    <div className="caixa amarela"></div>
                    <div className="caixa vermelha"></div>
                </div>
                <button className="botao">Descubra mais</button>
            </div>
        </div>
    );
};

export default Eventos;
