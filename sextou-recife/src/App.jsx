import Carrossel from "./components/Carrossel";
import Eventos from "./components/EventosFuturos";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import NossosParceiros from "./components/NossosParceiros";

function App() {
    return (
        <>
            <Navbar />
            <Eventos />
            <NossosParceiros />
            <Carrossel />
            <Footer />
        </>
    );
}

export default App;
