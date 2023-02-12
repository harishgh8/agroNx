import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import NavBar from "./components/NavBar";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Home" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
