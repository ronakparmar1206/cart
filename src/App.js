import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Carddetails from "./Components/Carddetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<Carddetails />} />
      </Routes>
    </div>
  );
}

export default App;
