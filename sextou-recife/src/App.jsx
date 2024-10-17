import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import Revitalizando from "./components/Revitalizando"
import Carrossel from "./components/Carrossel";
import EventosFuturos from "./components/EventosFuturos";
import NossosParceiros from "./components/NossosParceiros";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="main-content">
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <article>
          <Revitalizando/>
        </article>
        <article>
          <Carrossel />
        </article>
        <article>
          <EventosFuturos />
        </article>
        <NossosParceiros />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
