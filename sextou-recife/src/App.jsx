import { useState } from "react";
import Banner from "./components/Michele/Michele";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Banner />
    </>
  );
}

export default App;
