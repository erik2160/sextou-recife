import "./App.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import EventosFuturos from "./components/EventosFuturos";
import Carrossel from "./Components/Carrossela";
import NossosParceiros from "./components/NossosParceiros";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <EventosFuturos />
            <NossosParceiros />
            <Footer />
            <Carrossel />
        </>
    );
}

export default App;
