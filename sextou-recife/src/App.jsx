import "./App.css";

import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import EventosFuturos from "./components/EventosFuturos";
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
        </>
    );
}

export default App;
